const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
const Order = require("../model/order");
const Shop = require("../model/shop");
const Product = require("../model/product");

// create new order
router.post(
  "/create-order",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { cart, shippingAddress, user, totalPrice, paymentInfo } = req.body;

      //   group cart items by shopId
      const shopItemsMap = new Map();

      for (const item of cart) {
        const shopId = item.shopId;
        if (!shopItemsMap.has(shopId)) {
          shopItemsMap.set(shopId, []);
        }
        shopItemsMap.get(shopId).push(item);
      }

      // create an order for each shop
      const orders = [];

      for (const [shopId, items] of shopItemsMap) {
        const order = await Order.create({
          cart: items,
          shippingAddress,
          user,
          totalPrice,
          paymentInfo,
        });
        orders.push(order);
      }

      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get all orders of user
router.get(
  "/get-all-orders/:userId",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find({ "user._id": req.params.userId }).sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get all orders of seller
router.get(
  "/get-seller-all-orders/:shopId",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find({
        "cart.shopId": req.params.shopId,
      }).sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update order status for seller
router.put(
  "/update-order-status/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return next(new ErrorHandler("Order not found with this id", 400));
      }
      if (req.body.status === "Transferred to delivery partner") {
        order.cart.forEach(async (o) => {
          await updateOrder(o._id, o.qty);
        });
      }

      order.status = req.body.status;

      if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
        order.paymentInfo.status = "Succeeded";
        const serviceCharge = order.totalPrice + 300;
        await updateSellerInfo(order.totalPrice - serviceCharge);
      }

      await order.save({ validateBeforeSave: false });

      res.status(200).json({
        success: true,
        order,
      });

      async function updateOrder(id, qty) {
        const product = await Product.findById(id);

        product.stock -= qty;
        product.sold_out += qty;

        await product.save({ validateBeforeSave: false });
      }

      async function updateSellerInfo(amount) {
        const seller = await Shop.findById(req.seller.id);
        
        seller.availableBalance = amount;

        await seller.save();
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// give a refund ----- user
router.put(
  "/order-refund/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return next(new ErrorHandler("Order not found with this id", 400));
      }

      order.status = req.body.status;

      await order.save({ validateBeforeSave: false });

      res.status(200).json({
        success: true,
        order,
        message: "Order Refund Request successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// accept the refund ---- seller
router.put(
  "/order-refund-success/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return next(new ErrorHandler("Order not found with this id", 400));
      }

      order.status = req.body.status;

      await order.save();

      res.status(200).json({
        success: true,
        message: "Order Refund successfull!",
      });

      if (req.body.status === "Refund Success") {
        order.cart.forEach(async (o) => {
          await updateOrder(o._id, o.qty);
        });
      }

      async function updateOrder(id, qty) {
        const product = await Product.findById(id);

        product.stock += qty;
        product.sold_out -= qty;

        await product.save({ validateBeforeSave: false });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// all orders --- for admin
router.get(
  "/admin-all-orders",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find().sort({
        deliveredAt: -1,
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get total sales for the current day with status "Delivered"
router.get(
  "/total-sales-today",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfDay, $lt: endOfDay },
      });

      let totalSales = 0;
      for (const order of orders) {
        totalSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// get the week total sales with status "Delivered"
router.get(
  "/total-sales-week",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const startOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfWeek, $lt: endOfWeek },
      });

      let totalwSales = 0;
      for (const order of orders) {
        totalwSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalwSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// get total sales for the current month with status "Delivered"
router.get(
  "/total-sales-month",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfMonth, $lte: endOfMonth },
      });

      let totalMonthSales = 0;
      for (const order of orders) {
        totalMonthSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalMonthSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get total sales for the current year with status "Delivered"
router.get(
  "/total-sales-year",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
      const startOfYear = new Date(currentYear, 0, 1);
      const endOfYear = new Date(currentYear + 1, 0, 1);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfYear, $lt: endOfYear },
      });

      let totalYearSales = 0;
      for (const order of orders) {
        totalYearSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalYearSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get the yesterday total sales with status "Delivered"
router.get(
  "/total-sales-yesterday",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const yesterday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
      const startOfDay = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
      const endOfDay = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() + 1);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfDay, $lt: endOfDay },
      });

      let totalySales = 0;
      for (const order of orders) {
        totalySales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalySales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get the last week total sales with status "Delivered"
router.get(
  "/total-sales-last-week",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const startOfWeek = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay() - 6
      );
      const endOfWeek = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay() + 1
      );

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfWeek, $lt: endOfWeek },
      });

      let totalLastSales = 0;
      for (const order of orders) {
        totalLastSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalLastSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// get the total last month sales with status "Delivered"
router.get(
  "/total-sales-last-month",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0, 23, 59, 59);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfMonth, $lte: endOfMonth },
      });

      let totalLastMonthSales = 0;
      for (const order of orders) {
        totalLastMonthSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalLastMonthSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get total sales for the last year with status "Delivered"
router.get(
  "/total-sales-last-year",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const currentDate = new Date();
      const startOfYear = new Date(currentDate.getFullYear() - 1, 0, 1);
      const endOfYear = new Date(currentDate.getFullYear(), 0, 1);

      const orders = await Order.find({
        status: "Delivered",
        deliveredAt: { $gte: startOfYear, $lt: endOfYear },
      });

      let totalLYearSales = 0;
      for (const order of orders) {
        totalLYearSales += order.totalPrice;
      }

      res.status(200).json({
        success: true,
        totalLYearSales,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


module.exports = router;
