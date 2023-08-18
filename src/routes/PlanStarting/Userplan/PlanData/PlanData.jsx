import { Outlet } from "react-router-dom"
import Navbar from "../../../../layout/Navbar"



const PlanData = () => {
  return (
    <div>
    <Navbar/>
    <Outlet />
  </div>
  )
}

export default PlanData