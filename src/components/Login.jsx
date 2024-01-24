import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import Nav from "./Navbar.jsx";

function Login() {
  return (
    <>
      <Nav />

      <div className="form-container">
        <h1>Login</h1>
        <form action="#">
          <input type="text" placeholder="Username" required pattern="[a-z]+" />
          <input
            type="password"
            placeholder="Password"
            required
            pattern="[0-9A-Za-z]+"
          />
          <Link to={"/Dashboard"} className="form-container-button">
            Login
          </Link>
        </form>
        <p>
          If you don't have an account{" "}
          <Link className="form-container-link" to={"/Register"}>
            Register Here!
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Login;
