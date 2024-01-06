import React, { useState } from "react";
import { auth, firebase } from "../../firebase/FirebaseInit";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FaGoogle }  from "react-icons/fa";

import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Email login successful, do any necessary actions
        console.log("Email login successful");
      })
      .catch((error) => {
        // Email login failed, handle the error
        console.error("Email login error:", error.message);
      });
  };

  const handlePhoneNumberLogin = () => {
    const appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );

    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS verification code sent successfully
        const verificationCode = window.prompt("Enter the verification code:");
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        // Phone number login successful, do any necessary actions
        console.log("Phone number login successful");
      })
      .catch((error) => {
        // Phone number login failed, handle the error
        console.error("Phone number login error:", error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Google login successful, do any necessary actions
        console.log("Google login successful");
      })
      .catch((error) => {
        // Google login failed, handle the error
        console.error("Google login error:", error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="login-box">
        
      <form className="login-form" onSubmit={handleEmailLogin}>
        {/* Email login */}
        <h2>Photogram</h2>
       <div className="email-d">
          <input
            type="email"
            placeholder="Enter email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
     
        <div className="password-d">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
         <div className="line">
            <span className="arrow"></span>
            <span className="content">OR</span>
            <span className="arrow"></span>
          </div>

          <div className="google_icon">
             {/* <button className="google_icon" onClick={handleGoogleLogin}> */}
                 <FaGoogle/>
             {/* </button> */}
            <span>Log in with Google</span>
          </div>
          <p>Forgot password?</p>
      </form>
  
      {/* Google login */}
      {/* <button className="login-form-button" onClick={handleGoogleLogin}>
        Google Login
      </button> */}
  </div>

      {/* Phone number login */}
      {/* <form className="login-form" onSubmit={handlePhoneNumberLogin}>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Phone Number Login</button>
      </form> */}
      <div className="sign-up">
      <p>Don't have a accout? <span>Sign Up</span></p></div>
    </div>
  );
  }  

export default Login;
