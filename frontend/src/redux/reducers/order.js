import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  orders: [], // Initial state of orders
  totalSales: 0, // Initial state of total current sales
  totalySales: 0, // Initial state of total yesterday sales
  totalwSales: 0, // Initial state of total current week sales
  totalLastSales: 0, // Initial state of total last week sales
  totalMonthSales: 0, // Initial state of total current month sales
  totalLastMonthSales: 0, // Initial state of total last month sales
  totalYearSales: 0, // Initial state of total year sales
  totalLYearSales: 0, // Initial state of total last year sales
  countCD: 0,
  countPD: 0,
  countCW: 0,
  countPW: 0,
  countCM: 0,
  countPM: 0,
  countCDD: 0,
  countPDD: 0,
  countCWD: 0,
  countPWD: 0,
  countCMD: 0,
  countPMD: 0,
  countCTD: 0,
  countPTD: 0,
  countCTW: 0,
  countPTW: 0,
  countCTM: 0,
  countPTM: 0,
};

export const orderReducer = createReducer(initialState, {
  // get all orders of user
  getAllOrdersUserRequest: (state) => {
    state.isLoading = true;
  },
  getAllOrdersUserSuccess: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  getAllOrdersUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all orders of shop
  getAllOrdersShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllOrdersShopSuccess: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  getAllOrdersShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all orders for admin
  adminAllOrdersRequest: (state) => {
    state.adminOrderLoading = true;
  },
  adminAllOrdersSuccess: (state, action) => {
    state.adminOrderLoading = false;
    state.adminOrders = action.payload;
  },
  adminAllOrdersFailed: (state, action) => {
    state.adminOrderLoading = false;
    state.error = action.payload;
  },

  // get total sales for the current day
  getTotalSalesTodayRequest: (state) => {
    state.isLoading = true;
  },
  getTotalSalesTodaySuccess: (state, action) => {
    state.isLoading = false;
    state.totalSales = action.payload;
  },
  getTotalSalesTodayFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get yestrrday total sales
  getYesterdaySaleRequest: (state) => {
    state.isLoading = true;
  },
  getYesterdaySaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalySales = action.payload;
  },
  getYesterdaySaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get the week total sales with status "Delivered"
  getCurrentWeekSaleRequest: (state) => {
    state.isLoading = true;
  },
  getCurrentWeekSaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalwSales = action.payload;
  },
  getCurrentWeekSaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get the last week total sales with status "Delivered"
  getLastWeekSaleRequest: (state) => {
    state.isLoading = true;
  },
  getLastWeekSaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalLastSales = action.payload;
  },
  getLastWeekSaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get total sales for the current month with status "Delivered"
  getMonthSaleRequest: (state) => {
    state.isLoading = true;
  },
  getMonthSaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalMonthSales = action.payload;
  },
  getMonthSaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get the total last month sales with status "Delivered"
  getLastMonthSaleRequest: (state) => {
    state.isLoading = true;
  },
  getLastMonthSaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalLastMonthSales = action.payload;
  },
  getLastMonthSaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get total sales for the current year with status "Delivered"
  getYearSaleRequest: (state) => {
    state.isLoading = true;
  },
  getYearSaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalYearSales = action.payload;
  },
  getYearSaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get total sales for the last year with status "Delivered"
  getLastYearSaleRequest: (state) => {
    state.isLoading = true;
  },
  getLastYearSaleSuccess: (state, action) => {
    state.isLoading = false;
    state.totalLYearSales = action.payload;
  },
  getLastYearSaleFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count all orders on the current day
  getCurrentDayOrderRequest: (state) => {
    state.isLoading = true;
  },
  getCurrentDayOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.countCD = action.payload;
  },
  getCurrentDayOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count all orders on the previous day
  getPreDayOrderRequest: (state) => {
    state.isLoading = true;
  },
  getPreDayOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.countPD = action.payload;
  },
  getPreDayOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current week
  getCurrentWeekOrderRequest: (state) => {
    state.isLoading = true;
  },
  getCurrentWeekOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.countCW = action.payload;
  },
  getCurrentWeekOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous week
  getPreWeekOrderRequest: (state) => {
    state.isLoading = true;
  },
  getPreWeekOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.countPW = action.payload;
  },
  getPreWeekOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current month
  getCurrentmonthOrderRequest: (state) => {
    state.isLoading = true;
  },
  getCurrentmonthOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.countCM = action.payload;
  },
  getCurrentmonthOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous month
  getPreMonthOrderRequest: (state) => {
    state.isLoading = true;
  },
  getPreMonthOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.countPM = action.payload;
  },
  getPreMonthOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous month
  getCurrDayDeliveredRequest: (state) => {
    state.isLoading = true;
  },
  getCurrDayDeliveredSuccess: (state, action) => {
    state.isLoading = false;
    state.countCDD = action.payload;
  },
  getCurrDayDeliveredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous day with status "delivered"
  getPreDayDeliveredRequest: (state) => {
    state.isLoading = true;
  },
  getPreDayDeliveredSuccess: (state, action) => {
    state.isLoading = false;
    state.countPDD = action.payload;
  },
  getPreDayDeliveredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current week with status "delivered"
  getCurrWeekDeliveredRequest: (state) => {
    state.isLoading = true;
  },
  getCurrWeekDeliveredSuccess: (state, action) => {
    state.isLoading = false;
    state.countCWD = action.payload;
  },
  getCurrWeekDeliveredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous week with status "delivered" 
  getPreWeekDeliveredRequest: (state) => {
    state.isLoading = true;
  },
  getPreWeekDeliveredSuccess: (state, action) => {
    state.isLoading = false;
    state.countPWD = action.payload;
  },
  getPreWeekDeliveredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current month with status "delivered"
  getCurrMonthDeliveredRequest: (state) => {
    state.isLoading = true;
  },
  getCurrMonthDeliveredSuccess: (state, action) => {
    state.isLoading = false;
    state.countCMD = action.payload;
  },
  getCurrMonthDeliveredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous month with status "delivered"
  getPreMonthDeliveredRequest: (state) => {
    state.isLoading = true;
  },
  getPreMonthDeliveredSuccess: (state, action) => {
    state.isLoading = false;
    state.countPMD = action.payload;
  },
  getPreMonthDeliveredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current day with status "transfer to delivery partner"
  getCurrDayTransferredRequest: (state) => {
    state.isLoading = true;
  },
  getCurrDayTransferredSuccess: (state, action) => {
    state.isLoading = false;
    state.countCTD = action.payload;
  },
  getCurrDayTransferredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous day with status "transfer to delivery partner"
  getPreDayTransferredRequest: (state) => {
    state.isLoading = true;
  },
  getPreDayTransferredSuccess: (state, action) => {
    state.isLoading = false;
    state.countPTD = action.payload;
  },
  getPreDayTransferredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current week with status "transfer to delivery partner"
  getCurrWeekTransferredRequest: (state) => {
    state.isLoading = true;
  },
  getCurrWeekTransferredSuccess: (state, action) => {
    state.isLoading = false;
    state.countCTW = action.payload;
  },
  getCurrWeekTransferredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous week with status "transfer to delivery partner"
  getPreWeekTransferredRequest: (state) => {
    state.isLoading = true;
  },
  getPreWeekTransferredSuccess: (state, action) => {
    state.isLoading = false;
    state.countPTW = action.payload;
  },
  getPreWeekTransferredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the current month with status "transfer to delivery partner"
  getCurrMonthTransferredRequest: (state) => {
    state.isLoading = true;
  },
  getCurrMonthTransferredSuccess: (state, action) => {
    state.isLoading = false;
    state.countCTM = action.payload;
  },
  getCurrMonthTransferredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Count orders for the previous month with status "transfer to delivery partner"
  getPreMonthTransferredRequest: (state) => {
    state.isLoading = true;
  },
  getPreMonthTransferredSuccess: (state, action) => {
    state.isLoading = false;
    state.countPTM = action.payload;
  },
  getPreMonthTransferredFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  clearErrors: (state) => {
    state.error = null;
  },
});
