import React from "react";
import "./SignIn.css"; // Importing the CSS file

const SignIn = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="https://ik.imagekit.io/lmmaihcez/Group%20483561.png?updatedAt=1741436427392"
          alt="Illustration"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h1>Hello!</h1>
        <p>Please Sign in here</p>

        <div className="input-container">
          <label>Username</label>
          <input type="text" />
          
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="options">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember"> Remember me</label>
          </div>
          <a href="#">Forgot your password?</a>
        </div>

        <button className="sign-in-btn">Sign In</button>

        <div className="divider">or continue with</div>

        <button className="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" />
          Sign in with Google
        </button>

        <p className="register">
          Not a member? <a href="#">Register now</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
