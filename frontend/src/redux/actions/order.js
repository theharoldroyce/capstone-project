import axios from "axios";
import { server } from "../../server";

// get all orders of user
export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersUserRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-all-orders/${userId}`
    );

    dispatch({
      type: "getAllOrdersUserSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersUserFailed",
      payload: error.response.data.message,
    });
  }
};

// get all orders of seller
export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersShopRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-seller-all-orders/${shopId}`
    );

    dispatch({
      type: "getAllOrdersShopSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersShopFailed",
      payload: error.response.data.message,
    });
  }
};


// get all orders of Admin
export const getAllOrdersOfAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "adminAllOrdersRequest",
    });

    const { data } = await axios.get(`${server}/order/admin-all-orders`, {
      withCredentials: true,
    });

    dispatch({
      type: "adminAllOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "adminAllOrdersFailed",
      payload: error.response.data.message,
    });
  }
};

// get total sales for the current day with status "Delivered"
export const getTotalSalesToday = () => async (dispatch) => {
  try {
    dispatch({
      type: "getTotalSalesTodayRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-today`);

    dispatch({
      type: "getTotalSalesTodaySuccess",
      payload: data.totalSales,
    });
  } catch (error) {
    dispatch({
      type: "getTotalSalesTodayFailed",
      payload: error.response.data.message,
    });
  }
};

// get the yesterday total sales with status "Delivered"
export const getYesterdaySale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getYesterdaySaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-yesterday`);

    dispatch({
      type: "getYesterdaySaleSuccess",
      payload: data.totalySales,
    });
  } catch (error) {
    dispatch({
      type: "getYesterdaySaleFailed",
      payload: error.response.data.message,
    });
  }
};

// get the week total sales with status "Delivered"
export const getCurrentWeekSale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrentWeekSaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-week`);

    dispatch({
      type: "getCurrentWeekSaleSuccess",
      payload: data.totalwSales,
    });
  } catch (error) {
    dispatch({
      type: "getCurrentWeekSaleFailed",
      payload: error.response.data.message,
    });
  }
};

// get the last week total sales with status "Delivered"
export const getLastWeekSale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getLastWeekSaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-last-week`);

    dispatch({
      type: "getLastWeekSaleSuccess",
      payload: data.totalLastSales,
    });
  } catch (error) {
    dispatch({
      type: "getLastWeekSaleFailed",
      payload: error.response.data.message,
    });
  }
};


// get total sales for the current month with status "Delivered"
export const getMonthSale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getMonthSaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-month`);

    dispatch({
      type: "getMonthSaleSuccess",
      payload: data.totalMonthSales,
    });
  } catch (error) {
    dispatch({
      type: "getMonthSaleFailed",
      payload: error.response.data.message,
    });
  }
};


// get the total last month sales with status "Delivered"
export const getLastMonthSale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getLastMonthSaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-last-month`);

    dispatch({
      type: "getLastMonthSaleSuccess",
      payload: data.totalLastMonthSales,
    });
  } catch (error) {
    dispatch({
      type: "getLastMonthSaleFailed",
      payload: error.response.data.message,
    });
  }
};


// get total sales for the current year with status "Delivered"
export const getYearSale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getYearSaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-year`);

    dispatch({
      type: "getYearSaleSuccess",
      payload: data.totalYearSales,
    });
  } catch (error) {
    dispatch({
      type: "getYearSaleFailed",
      payload: error.response.data.message,
    });
  }
};


// get total sales for the last year with status "Delivered"
export const getLastYearSale = () => async (dispatch) => {
  try {
    dispatch({
      type: "getLastYearSaleRequest",
    });

    const { data } = await axios.get(`${server}/order/total-sales-last-year`);

    dispatch({
      type: "getLastYearSaleSuccess",
      payload: data.totalLYearSales,
    });
  } catch (error) {
    dispatch({
      type: "getLastYearSaleFailed",
      payload: error.response.data.message,
    });
  }
};