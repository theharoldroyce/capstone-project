import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdBorderClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import {
  getAllOrdersOfAdmin,
  getTotalSalesToday,
  getYesterdaySale,
  getCurrentWeekSale,
  getLastWeekSale,
  getMonthSale,
  getLastMonthSale,
  getYearSale,
  getLastYearSale
} from "../../redux/actions/order";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Loader from "../Layout/Loader";

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);
  const {
    adminOrders,
    adminOrderLoading,
    totalSales,
    totalySales,
    totalwSales,
    totalLastSales,
    totalMonthSales,
    totalLastMonthSales,
    totalYearSales,
    totalLYearSales
  } = useSelector((state) => state.order);

 
  const [todaySales, setTodaySales] = useState(0);
  const [yesterdaySales, setYesterdaySales] = useState(0);
  const [weekSales, setWeekSales] = useState(0);
  const [lastWeektSales, setLastWeekSales] = useState(0);
  const [monthSales, setMonthSales] = useState(0);
  const [lMonthSales, setLMonthSales] = useState(0);
  const [yearSales, setYearSales] = useState(0);
  const [lastYearSales, setLastYearSales] = useState(0);



  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
    dispatch(getTotalSalesToday());
    dispatch(getYesterdaySale());
    dispatch(getCurrentWeekSale());
    dispatch(getLastWeekSale());
    dispatch(getMonthSale());
    dispatch(getLastMonthSale());
    dispatch(getYearSale());
    dispatch(getLastYearSale());
  }, [dispatch]);

  useEffect(() => {
    setTodaySales(totalSales);
    setYesterdaySales(totalySales);
    setWeekSales(totalwSales);
    setLastWeekSales(totalLastSales);
    setMonthSales(totalMonthSales);
    setLMonthSales(totalLastMonthSales);
    setYearSales(totalYearSales);
    setLastYearSales(totalLYearSales);
  }, [totalSales, totalySales, totalwSales, totalLastSales, totalMonthSales,totalLastMonthSales,totalYearSales,totalLYearSales]);

  console.log(yearSales)
  
  const availableBalance = seller?.availableBalance.toFixed(2);

  const adminEarning = adminOrders && adminOrders.reduce((acc, item) => acc + item.totalPrice, 0);
  const adminBalance = adminEarning?.toFixed(2);



  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
      total: "₱ " + item.totalPrice + ".00",
      status: item.status,
    });
  });

  return (
    <div className="w-full p-8">
      <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
      <div className="w-full block 800px:flex items-center justify-between">
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Total Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {adminBalance}</h5>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <MdBorderClear size={30} className="mr-2" fill="#00000085" />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
          <Link to="/dashboard-orders">
            <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Products
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{products && products.length}</h5>
          <Link to="/dashboard-products">
            <h5 className="pt-4 pl-2 text-[#077f9c]">View Products</h5>
          </Link>
        </div>
      </div>
      <br />
      <div className="w-full block 800px:flex items-center justify-between">
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Today's Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {todaySales}.00</h5>
          <br />
          <div className="flex items-center">
            <FcSalesPerformance
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Day Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {yesterdaySales}.00</h5>
        </div>
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Week Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {weekSales}.00</h5>
          <br />
          <div className="flex items-center">
            <FcSalesPerformance
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Week Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {lastWeektSales}.00</h5>
        </div>
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Month
              Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {monthSales}.00</h5>
          <br />
          <div className="flex items-center">
            <FcSalesPerformance
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Month Earning{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {lMonthSales}.00</h5>
        </div>
      </div>

      <br />
      <div>
        <div className="w-full block 800px:flex items-center justify-around">
          <div className="w-full mb-4 800px:w-[30%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <FcSalesPerformance
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Current Year Earning{" "}
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {yearSales}.00</h5>
           
          </div>
          <div className="w-full mb-4 800px:w-[30%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <FcSalesPerformance
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Previous Year Earning{" "}
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {lastYearSales}.00</h5>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
      <div className="w-full min-h-[45vh] bg-white rounded">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </div>
  );
};

export default DashboardHero;
