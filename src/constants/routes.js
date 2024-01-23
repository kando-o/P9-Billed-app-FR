import LoginUI from "../views/LoginUI.js"
import BillsUI from "../views/BillsUI.js"
import NewBillUI from "../views/NewBillUI.js"
import DashboardUI from "../views/DashboardUI.js"

export const ROUTES_PATH = {
  Login: '/',
  Bills: '#employee/bills',
  NewBill : '#employee/bill/new',
  Dashboard: '#admin/dashboard'
}

export const ROUTES = ({ pathname, data, error, loading }) => {
  switch (pathname) {
    case ROUTES_PATH['Login']:
<<<<<<< HEAD
      return LoginUI({ data, error, loading })
=======
      return LoginUI({ data, error:'test Login', loading })
>>>>>>> fix-bug-DisplayDashboard
    case ROUTES_PATH['Bills']:
      return BillsUI({ data, error, loading })
    case ROUTES_PATH['NewBill']:
      return NewBillUI()
    case ROUTES_PATH['Dashboard']:
<<<<<<< HEAD
      return DashboardUI({ data, error, loading })
=======
      return DashboardUI({ data, error:'Test error', loading })
>>>>>>> fix-bug-DisplayDashboard
    default:
      return LoginUI({ data, error, loading })
  }
}

