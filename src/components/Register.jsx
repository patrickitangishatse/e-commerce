import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form-container">
      <h1>Register Here</h1>
      <form action="#">
        <input type="text" placeholder="Names" name="names" required />
        <input type="email" placeholder="Enter Your Email" required />
        <input type="text" placeholder="Enter Your Phone number" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <Link to={"/Login"} className="form-container-button">
          Regsiter
        </Link>
      </form>
      <p>
        Already you have account Please{" "}
        <Link className="form-container-link" to={"/Login"}>
          Login Here!
        </Link>
      </p>
    </div>
  );
}

export default Register;
