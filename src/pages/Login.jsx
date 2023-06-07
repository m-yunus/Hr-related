import "../assets/css/login.css";
import Logo from "../assets/images/logo/image-removebg-preview.png";
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <>
      <div className="login-container">
       <LoginForm/>

        <div className="left-section">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="quotes">
            <p>&quot;You gotta be create in Next Wow&quot;</p>
          </div>
        </div>
        <div className="right-section">
            <div className="footer">
                <p>copyright © 2021  </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
