import { FaEye, FaUser } from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import { Link } from "react-router-dom"


const RegisterForm = () => {
  return (
   <>
    <div className="login-section">
        <div className="login-form">
          <h3 style={{ textAlign: "center", padding: "20px" }}>Register</h3>
          <div className="input-container">
            <input type="text" placeholder="name" />
            <span className="icon">
              <FaUser />
            </span>
          </div>
          <div className="input-container">
            <input type="email" placeholder="E-mail" />
            <span className="icon">
              <MdEmail />
            </span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
            <span className="icon">
              <FaEye />
            </span>
          </div>
          <button>Register</button>
          <div className="forgot-register-section">
            
            <p>
              <Link to="/">
                <p>Already have an account ? </p>
              </Link>
            </p>
          </div>
        </div>
      </div>
   </>
  )
}

export default RegisterForm