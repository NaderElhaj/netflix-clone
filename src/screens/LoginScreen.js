import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          src="/images/netflix-logo.png"
          alt="Logo"
          className="loginScreen_logo"
        />
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter yout email to create or restart your membership.</h3>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
