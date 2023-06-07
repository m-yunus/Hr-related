import "../assets/css/login.css";
import { Link } from "react-router-dom";
import { FaUser, FaEye } from "react-icons/fa";
const LoginForm = () => {
  return (
    <>
      <div className="login-section">
        <div className="login-form">
          <h3 style={{ textAlign: "center", padding: "20px" }}>Login</h3>
          <div className="input-container">
            <input type="text" placeholder="Username" />
            <span className="icon">
              <FaUser />
            </span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
            <span className="icon">
              <FaEye />
            </span>
          </div>
         <Link to="/Personalize"><button>Login</button> </Link> 
          <div className="forgot-register-section">
            <p>
              <a href="">Forgot Password?</a>
            </p>
            <p>
              <Link to="/Register">
                <p>Register Now</p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
