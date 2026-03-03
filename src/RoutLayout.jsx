import React from 'react'
import { Outlet } from "react-router";
import Navber from './componets/Navber';

const RoutLayout = () => {
  return (
    <div>
      <Navber/>
      <Outlet/>
    </div>
  )
}

export default RoutLayout
