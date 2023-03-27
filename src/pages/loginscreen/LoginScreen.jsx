import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "../signUpScreen/SignUpScreen";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScren__background">
                <img
                    className="loginScreen__logo"
                    src="https://www.turkishnews.com/tr/content/wp-content/uploads/2020/10/Netflix-Logo.wine_-1980x1320.png"
                    alt="loginLogo"
                />
                <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__button"
                >
                    Log in
                </button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {!signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmas and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>

                        <h3>
                            Ready to watch? Enter your email to create or
                            restart your membership
                        </h3>
                        <div className="loginScreen__input">
                            <form>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <button
                                    onCLick={() => setSignIn(true)}
                                    className="loginScreen__getStarted"
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
