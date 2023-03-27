import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    onClick={() => navigate("/")}
                    className="nav__logo"
                    src="https://www.turkishnews.com/tr/content/wp-content/uploads/2020/10/Netflix-Logo.wine_-1980x1320.png"
                    alt="netflix_logo"
                />
                <img
                    onClick={() => navigate("/profile")}
                    className="nav__avatar"
                    src="https://avatars.mds.yandex.net/i?id=053a51fdd088b8f48879b84220193474d4c0258b-8223286-images-thumbs&n=13&exp=1"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Nav;
