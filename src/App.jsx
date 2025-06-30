import React, { useEffect } from 'react'
import { Login } from './components/Auth/Login';
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard';
import { AdminDashboard } from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

export const App = () => {
  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  })
  return (
    <>  
    <Login></Login>
    {/* <EmployeeDashboard></EmployeeDashboard> */}
    {/* <AdminDashboard/> */}
    </>
  )
}
export default App;
