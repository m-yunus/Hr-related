import "../assets/css/dashboard.css"

import { useLocation } from "react-router-dom";

const Dash_Right_Top = () => {
  const location = useLocation();

  return (
    <div className="dash-right-top">
      <div className="pathname">
        <h3>{location.pathname}</h3>
      </div>
      <button className="update-button">Update</button>
    </div>
  );
};

export default Dash_Right_Top;