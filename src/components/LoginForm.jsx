import "../assets/css/login.css";
import { Link,  useNavigate } from "react-router-dom";
import { FaUser, FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../ApiService/ApiService";
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  
  const Loginurl=`${BaseUrl}/api/user/login`

  const navigate=useNavigate();
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlelogin = (e) => {
    e.preventDefault();

    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append('username', loginData.username);
    urlEncodedData.append('password', loginData.password);

    axios
      .post(Loginurl, urlEncodedData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token; 
          sessionStorage.setItem('token', token);
        
          navigate('/personalize');
        }
      })
      .catch((err) => {
        console.log(err);
        
      });
  };

  return (
    <>
      <div className="login-section">
        <div className="login-form">
          <h3 style={{ textAlign: "center", padding: "20px" }}>Login</h3>
          <form onSubmit={handlelogin}>

          
          <div className="input-container">
            <input type="text" placeholder="Username" name="username" onChange={handleonchange} value={loginData.username} />
            <span className="icon">
              <FaUser />
            </span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" name="password" onChange={handleonchange}  value={loginData.password} />
            <span className="icon">
              <FaEye />
            </span>
          </div>
         <button type="submit">Login</button>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
