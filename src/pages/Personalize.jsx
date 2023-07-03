import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Dash_Right_Top from "../components/Dash_Right_Top";

const Personalize = () => {
  return (
    <div className="dash-board_container">
      <Navbar />
      <div className="container-personalize">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Dash_Right_Top/>
        <div className="content-container">
        <Outlet />
        </div>
       
      </div>
    </div>
      </div>
     
  );
};

export default Personalize;
