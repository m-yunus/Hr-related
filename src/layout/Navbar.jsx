import { FaHome} from "react-icons/fa"
import {AiOutlinePoweroff} from "react-icons/ai"
import Logo from "../assets/images/logo/image-removebg-preview.png";
import User from "../assets/images/images/portrait-smiling-blonde-woman.jpg"
import "../assets/css/dashboard.css"
const Navbar = () => {
  return (
   <>
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <div className="navbar-user">
          <FaHome className="navbar-icon"  style={{color:"white"}}/>
          <img src={User} alt="Profile" className="profile-picture" />
          
          <span className="username">User2</span>
          <span className="username">Logout</span>
          <AiOutlinePoweroff className="navbar-icon"  style={{color:"white"}}/>
        </div>
      </div>
    </nav>
   </>
  )
}

export default Navbar