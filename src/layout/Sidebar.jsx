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
          <Link to="/personalize/link1">Link 1</Link>
          <Link to="/personalize/link2">Link 2</Link>
          <Link to="/personalize/link3">Link 3</Link>
          <Link to="/personalize/link4">Link 4</Link>
          <Link to="/personalize/link5">Link 5</Link>
          <Link to="/personalize/link6">Link 6</Link>
          <Link to="/personalize/link7">Link 7</Link>
          <Link to="/personalize/link8">Link 8</Link>
          <Link to="/personalize/link9">Link 9</Link>
          <Link to="/personalize/link10">Link 10</Link>
        </div>
      </div>
      </>
  )
}

export default Sidebar