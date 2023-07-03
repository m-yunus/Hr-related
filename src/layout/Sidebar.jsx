import {  FaSearch } from "react-icons/fa"
import "../assets/css/dashboard.css"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
   <>
      <div className="search-box">
        <input type="text" placeholder="Search" className="search-input" />
        <FaSearch className="search-icon" />
      </div>
      <div className="sidebar-container">
        <div className="links">
          {/* Add your links here */}
          <Link to="/personalize/culture-setting">Culture Setting</Link>
          <Link to="/personalize/Salary-Components">Salary Components</Link>
          <Link to="/personalize/Integration-with-HRIS">Integration with HRIS</Link>
          <Link to="/personalize/Company-profile">Company profile</Link>
          <Link to="/personalize/User-Creation">User Creation</Link>
          <Link to="/personalize/Workflow">Workflow</Link>
          <Link to="/personalize/Exclusion-Criteria">Exclusion Criteria</Link>
          <Link to="/personalize/SuperVisor-Page">SuperVisor Page</Link>
          <Link to="/personalize/HR-Review-Settings">HR Review Settings</Link>
          <Link to="/personalize/History-Data">History Data</Link>
          <Link to="/personalize/Total-Rewards-Statement">Total Rewards Statement</Link>
          <Link to="/personalize/link10">Turn Around Time</Link>
          <Link to="/personalize/link10">Performance based bonus</Link>
        </div>
      </div>
      </>
  )
}

export default Sidebar