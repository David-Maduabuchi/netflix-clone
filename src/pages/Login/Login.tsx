import "./Login.scss";
import logo from "../../assets/logo.png";
const Login = () => {
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" name="" placeholder="Your Name" />
          <input type="email" name="" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" className="checkbox"/>
              <label htmlFor="" >Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
