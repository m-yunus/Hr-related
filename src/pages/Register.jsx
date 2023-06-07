import RegisterForm from "../components/RegisterForm"
import "../assets/css/login.css";
import Logo from "../assets/images/logo/image-removebg-preview.png";


const Register = () => {
  return (
    <div className="login-container">
       <RegisterForm/>

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
  )
}

export default Register