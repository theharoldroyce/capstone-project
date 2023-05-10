import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import {
  FcSalesPerformance,
  FcInTransit,
  FcPackage,
  FcShipped,
  FcInternal,
  FcExternal,
} from "react-icons/fc";
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
  getLastYearSale,
  getCurrentDayOrder,
  getPreDayOrder,
  getCurrentWeekOrder,
  getPreWeekOrder,
  getCurrentmonthOrder,
  getPreMonthOrder,
  getCurrDayDelivered,
  getPreDayDelivered,
  getCurrWeekDelivered,
  getPreWeekDelivered,
  getCurrMonthDelivered,
  getPreMonthDelivered,
  getCurrDayTransferred,
  getPreDayTransferred,
  getCurrWeekTransferred,
  getPreWeekTransferred,
  getCurrMonthTransferred,
  getPreMonthTransferred,
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
    totalLYearSales,
    countCD,
    countPD,
    countCW,
    countPW,
    countCM,
    countPM,
    countCDD,
    countPDD,
    countCWD,
    countPWD,
    countCMD,
    countPMD,
    countCTD,
    countPTD,
    countCTW,
    countPTW,
    countCTM,
    countPTM,
  } = useSelector((state) => state.order);


  const [todaySales, setTodaySales] = useState(0);
  const [todayOrder, setTodayOrder] = useState(0);
  const [todayDelivered, setTodayDelivered] = useState(0);
  const [todayTransferred, setTodayTransferred] = useState(0);

  const [yesterdaySales, setYesterdaySales] = useState(0);
  const [yesterdayOrder, setYesterdayOrder] = useState(0);
  const [yesterdayDelivered, setYesterdayDelivered] = useState(0);
  const [yesterdayTransferred, setYesterdayTransferred] = useState(0);

  const [weekSales, setWeekSales] = useState(0);
  const [weekOrder, setWeekOrder] = useState(0);
  const [weekDelivered, setWeekDelivered] = useState(0);
  const [weekTransferred, setWeekTransferred] = useState(0);

  const [lastWeektSales, setLastWeekSales] = useState(0);
  const [lastWeekOrder, setLastWeekOrder] = useState(0);
  const [lastWeekDelivered, setLastWeekDelivered] = useState(0);
  const [lastWeekTransferred, setLastWeekTransferred] = useState(0);

  const [monthSales, setMonthSales] = useState(0);
  const [monthOrder, setMonthOrder] = useState(0);
  const [monthDelivered, setMonthDelivered] = useState(0);
  const [monthTransferred, setMonthTransferred] = useState(0);

  const [lMonthSales, setLMonthSales] = useState(0);
  const [lMonthOrder, setLMonthOrder] = useState(0);
  const [lMonthDelivered, setLMonthDelivered] = useState(0);
  const [lMonthTransferred, setLMonthTransferred] = useState(0);

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
    dispatch(getCurrentDayOrder());
    dispatch(getPreDayOrder());
    dispatch(getCurrentWeekOrder());
    dispatch(getPreWeekOrder());
    dispatch(getCurrentmonthOrder());
    dispatch(getPreMonthOrder());
    dispatch(getCurrDayDelivered());
    dispatch(getPreDayDelivered());
    dispatch(getCurrWeekDelivered());
    dispatch(getPreWeekDelivered());
    dispatch(getCurrMonthDelivered());
    dispatch(getPreMonthDelivered());
    dispatch(getCurrDayTransferred());
    dispatch(getPreDayTransferred());
    dispatch(getCurrWeekTransferred());
    dispatch(getPreWeekTransferred());
    dispatch(getCurrMonthTransferred());
    dispatch(getPreMonthTransferred());
  }, [dispatch]);

  useEffect(() => {
    setTodaySales(totalSales);
    setTodayOrder(countCD);
    setTodayDelivered(countCDD);
    setTodayTransferred(countCTD);

    setYesterdaySales(totalySales);
    setYesterdayOrder(countPD);
    setYesterdayDelivered(countPDD);
    setYesterdayTransferred(countPTD);

    setWeekSales(totalwSales);
    setWeekOrder(countCW);
    setWeekDelivered(countCWD);
    setWeekTransferred(countCTW);

    setLastWeekSales(totalLastSales);
    setLastWeekOrder(countPW);
    setLastWeekDelivered(countPWD);
    setLastWeekTransferred(countPTW);

    setMonthSales(totalMonthSales);
    setMonthOrder(countCM);
    setMonthDelivered(countCMD);
    setMonthTransferred(countCTM);

    setLMonthSales(totalLastMonthSales);
    setLMonthOrder(countPM);
    setLMonthDelivered(countPMD);
    setLMonthTransferred(countPTM);

    setYearSales(totalYearSales);
    setLastYearSales(totalLYearSales);
  }, [
    totalSales,
    countCD,
    countCDD,
    countCTD,
    totalySales,
    countPD,
    countPDD,
    countPTD,
    totalwSales,
    countCW,
    countCWD,
    countCTW,
    totalLastSales,
    countPW,
    countPWD,
    countPTW,
    totalMonthSales,
    countCM,
    countCMD,
    countCTM,
    totalLastMonthSales,
    countPM,
    countPMD,
    countPTM,
    totalYearSales,
    totalLYearSales
  ]);

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
          <div className="flex items-center ">
            <FcInternal
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Total Earning's{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500] ">₱ {totalYearSales}.00</h5>
          <br/>
          <div className="flex items-center">
            <FcExternal
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              UpComing Earning's{" "}
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500] ">₱ {adminBalance}</h5>
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

      {/* <div className="w-full block 800px:flex items-center justify-between">
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
      </div> */}

      <br />  {/* today Overview */}
      <h3 className="text-[22px] font-Poppins pb-2">Today's Overview</h3>
      <div className="w-full block 800px:flex items-center justify-between gap-2">
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcPackage
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Today's Order{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {todayOrder} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcInTransit
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Today's Shipped Out{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {todayTransferred} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcShipped
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Today's Delivered{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {todayDelivered} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Today's Earning's{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {todaySales}.00</h5>
        </div>
      </div>
      <h3 className="text-[22px] font-Poppins pb-2">Previous Day Overview</h3>
      <div className="w-full block 800px:flex items-center justify-between gap-2">
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcPackage
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Day Order{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {yesterdayOrder} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcInTransit
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h5
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Day Shipped Out{" "}
            </h5>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {yesterdayTransferred} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcShipped
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Day Delivered{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {yesterdayDelivered} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Day Earning's{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {yesterdaySales}.00</h5>
        </div>
      </div>
      <br />
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Current Week Overview</h3>
      <div className="w-full block 800px:flex items-center justify-between gap-2">
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcPackage
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Week Order{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {weekOrder}</h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcInTransit
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h5
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Week Shipped Out{" "}
            </h5>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {weekTransferred} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcShipped
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Week Delivered{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {weekDelivered} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Week Earning{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {weekSales}.00</h5>
        </div>
      </div>
      <h3 className="text-[22px] font-Poppins pb-2">Previous Week Overview</h3>
      <div className="w-full block 800px:flex items-center justify-between gap-2">
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcPackage
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Week Order{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {lastWeekOrder} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcInTransit
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h5
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Week Shipped Out{" "}
            </h5>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {lastWeekTransferred} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcShipped
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Week Delivered{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {lastWeekDelivered} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Week Earning{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {lastWeektSales}.00</h5>
        </div>
      </div>
      <br />
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Current Month Overview</h3>
      <div className="w-full block 800px:flex items-center gap-2">
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcPackage
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Month Order{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {monthOrder} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcInTransit
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h5
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Month Shipped Out{" "}
            </h5>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {monthTransferred} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcShipped
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Month Delivered{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {monthDelivered} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Current Month Earning{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {monthSales}.00</h5>
        </div>
      </div>
      <h3 className="text-[22px] font-Poppins pb-2">Previous Month Overview</h3>
      <div className="w-full block 800px:flex items-center gap-2">
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcPackage
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Month Order{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {lMonthOrder} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcInTransit
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h5
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Month Shipped Out{" "}
            </h5>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {lMonthTransferred} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcShipped
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Month Delivered{" "}
            </h4>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]"> {lMonthDelivered} </h5>
        </div>
        <div className="w-full mb-4 800px:w-[25%] min-h-[15vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <FcSalesPerformance
              size={20}
              className="mr-2"
              fill="#00000085"
            />
            <h4
              className={`${styles.productTitle} !text-[15px] leading-5 !font-[400] text-[#00000085]`}
            >
              Previous Month Earning{" "}
            </h4>
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
