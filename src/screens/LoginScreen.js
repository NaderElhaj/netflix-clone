import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          src="/images/netflix-logo.png"
          alt="Logo"
          className="loginScreen_logo"
        />
        <button className="loginScreen_button" onClick={()=>setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">

        {signIn ? (
          <SignupScreen />
):(

          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter yout email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  className="loginScreen__getStarted"
                  onClick={()=>setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
