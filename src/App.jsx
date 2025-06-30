import React from 'react'
import { Login } from './components/Auth/Login';
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard';
import { AdminDashboard } from './components/Dashboard/AdminDashboard';

export const App = () => {
  return (
    <>
    {/* <Login></Login> */}
    {/* <EmployeeDashboard></EmployeeDashboard> */}
    <AdminDashboard/>
    </>
  )
}
export default App;
