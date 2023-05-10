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

// Count all orders on the current day
export const getCurrentDayOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrentDayOrderRequest",
    });

    const { data } = await axios.get(`${server}/order/count-orders-today`);

    dispatch({
      type: "getCurrentDayOrderSuccess",
      payload: data.countCD,
    });
  } catch (error) {
    dispatch({
      type: "getCurrentDayOrderFailed",
      payload: error.response.data.message,
    });
  }
};

// Count all orders on the previous day
export const getPreDayOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreDayOrderRequest",
    });

    const { data } = await axios.get(`${server}/order/count-orders-previous-day`);

    dispatch({
      type: "getPreDayOrderSuccess",
      payload: data.countPD,
    });
  } catch (error) {
    dispatch({
      type: "getPreDayOrderFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current week
export const getCurrentWeekOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrentWeekOrderRequest",
    });

    const { data } = await axios.get(`${server}/order/count-orders-current-week`);

    dispatch({
      type: "getCurrentWeekOrderSuccess",
      payload: data.countCW,
    });
  } catch (error) {
    dispatch({
      type: "getCurrentWeekOrderFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous week
export const getPreWeekOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreWeekOrderRequest",
    });

    const { data } = await axios.get(`${server}/order/count-orders-previous-week`);

    dispatch({
      type: "getPreWeekOrderSuccess",
      payload: data.countPW,
    });
  } catch (error) {
    dispatch({
      type: "getPreWeekOrderFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current month
export const getCurrentmonthOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrentmonthOrderRequest",
    });

    const { data } = await axios.get(`${server}/order/count-orders-current-month`);

    dispatch({
      type: "getCurrentmonthOrderSuccess",
      payload: data.countCM,
    });
  } catch (error) {
    dispatch({
      type: "getCurrentmonthOrderFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous month
export const getPreMonthOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreMonthOrderRequest",
    });

    const { data } = await axios.get(`${server}/order/count-orders-previous-month`);

    dispatch({
      type: "getPreMonthOrderSuccess",
      payload: data.countPM,
    });
  } catch (error) {
    dispatch({
      type: "getPreMonthOrderFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current day with status "delivered"
export const getCurrDayDelivered = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrDayDeliveredRequest",
    });

    const { data } = await axios.get(`${server}/order/delivered-orders-current-day`);

    dispatch({
      type: "getCurrDayDeliveredSuccess",
      payload: data.countCDD,
    });
  } catch (error) {
    dispatch({
      type: "getCurrDayDeliveredFailed",
      payload: error.response.data.message,
    });
  }
};


// Count orders for the previous day with status "delivered"
export const getPreDayDelivered = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreDayDeliveredRequest",
    });

    const { data } = await axios.get(`${server}/order/delivered-orders-previous-day`);

    dispatch({
      type: "getPreDayDeliveredSuccess",
      payload: data.countPDD,
    });
  } catch (error) {
    dispatch({
      type: "getPreDayDeliveredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current week with status "delivered"
export const getCurrWeekDelivered = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrWeekDeliveredRequest",
    });

    const { data } = await axios.get(`${server}/order/delivered-orders-current-week`);

    dispatch({
      type: "getCurrWeekDeliveredSuccess",
      payload: data.countCWD,
    });
  } catch (error) {
    dispatch({
      type: "getCurrWeekDeliveredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous week with status "delivered"
export const getPreWeekDelivered = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreWeekDeliveredRequest",
    });

    const { data } = await axios.get(`${server}/order/delivered-orders-previous-week`);

    dispatch({
      type: "getPreWeekDeliveredSuccess",
      payload: data.countPWD,
    });
  } catch (error) {
    dispatch({
      type: "getPreWeekDeliveredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current month with status "delivered"
export const getCurrMonthDelivered = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrMonthDeliveredRequest",
    });

    const { data } = await axios.get(`${server}/order/delivered-orders-current-month`);

    dispatch({
      type: "getCurrMonthDeliveredSuccess",
      payload: data.countCMD,
    });
  } catch (error) {
    dispatch({
      type: "getCurrMonthDeliveredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous month with status "delivered"
export const getPreMonthDelivered = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreMonthDeliveredRequest",
    });

    const { data } = await axios.get(`${server}/order/delivered-orders-previous-month`);

    dispatch({
      type: "getPreMonthDeliveredSuccess",
      payload: data.countPMD,
    });
  } catch (error) {
    dispatch({
      type: "getPreMonthDeliveredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current day with status "transfer to delivery partner"
export const getCurrDayTransferred = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrDayTransferredRequest",
    });

    const { data } = await axios.get(`${server}/order/tdf-current-day`);

    dispatch({
      type: "getCurrDayTransferredSuccess",
      payload: data.countCTD,
    });
  } catch (error) {
    dispatch({
      type: "getCurrDayTransferredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous day with status "transfer to delivery partner"
export const getPreDayTransferred = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreDayTransferredRequest",
    });

    const { data } = await axios.get(`${server}/order/tdf-previous-day`);

    dispatch({
      type: "getPreDayTransferredSuccess",
      payload: data.countPTD,
    });
  } catch (error) {
    dispatch({
      type: "getPreDayTransferredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current week with status "transfer to delivery partner"
export const getCurrWeekTransferred = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrWeekTransferredRequest",
    });

    const { data } = await axios.get(`${server}/order/tdf-current-week`);

    dispatch({
      type: "getCurrWeekTransferredSuccess",
      payload: data.countCTW,
    });
  } catch (error) {
    dispatch({
      type: "getCurrWeekTransferredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous week with status "transfer to delivery partner"
export const getPreWeekTransferred = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreWeekTransferredRequest",
    });

    const { data } = await axios.get(`${server}/order/tdf-previous-week`);

    dispatch({
      type: "getPreWeekTransferredSuccess",
      payload: data.countPTW,
    });
  } catch (error) {
    dispatch({
      type: "getPreWeekTransferredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the current month with status "transfer to delivery partner"
export const getCurrMonthTransferred = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCurrMonthTransferredRequest",
    });

    const { data } = await axios.get(`${server}/order/tdf-current-month`);

    dispatch({
      type: "getCurrMonthTransferredSuccess",
      payload: data.countCTM,
    });
  } catch (error) {
    dispatch({
      type: "getCurrMonthTransferredFailed",
      payload: error.response.data.message,
    });
  }
};

// Count orders for the previous month with status "transfer to delivery partner"
export const getPreMonthTransferred = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPreMonthTransferredRequest",
    });

    const { data } = await axios.get(`${server}/order/tdf-previous-month`);

    dispatch({
      type: "getPreMonthTransferredSuccess",
      payload: data.countPTM,
    });
  } catch (error) {
    dispatch({
      type: "getPreMonthTransferredFailed",
      payload: error.response.data.message,
    });
  }
};