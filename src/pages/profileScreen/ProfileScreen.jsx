import React from "react";
import "./profileScreen.css";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { selectUser } from "../../features/counter/counterSlice";
import { auth } from "../../firebase";
import PlanScreen from "../plansScreen/PlanScreen";

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://avatars.mds.yandex.net/i?id=053a51fdd088b8f48879b84220193474d4c0258b-8223286-images-thumbs&n=13&exp=1"
                        alt="edit_logo"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
