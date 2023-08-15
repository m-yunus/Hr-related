import axios from "axios";
import { useState } from "react";
import { FaEye, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BaseUrl } from "../ApiService/ApiService";

const RegisterForm = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
  });

  const RegisterUrl =`${BaseUrl}/api/user/register`;


  const handleInput = (event) => {
    event.preventDefault();
    setRegister({ ...register, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(RegisterUrl, register);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <div className="login-section">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <h3 style={{ textAlign: "center", padding: "20px" }}>Register</h3>
            <div className="input-container">
              <input
                type="text"
                placeholder="username"
                onChange={handleInput}
                name="username"
              />
              <span className="icon">
                <FaUser />
              </span>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Fullname"
                onChange={handleInput}
                name="fullName"
              />
              <span className="icon">
                <FaUser />
              </span>
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="E-mail"
                onChange={handleInput}
                name="email"
              />
              <span className="icon">
                <MdEmail />
              </span>
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                onChange={handleInput}
                name="password"
              />
              <span className="icon">
                <FaEye />
              </span>
            </div>
            <button type="submit">Register</button>
            <div className="forgot-register-section">
              <p>
                <Link to="/">
                  <p>Already have an account ? </p>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
