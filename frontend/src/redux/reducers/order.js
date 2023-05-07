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



  clearErrors: (state) => {
    state.error = null;
  },
});
