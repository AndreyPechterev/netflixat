import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/loginscreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/counterSlice";
import ProfileScreen from "./pages/profileScreen/ProfileScreen";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });

        return unsubscribe;
    }, [dispatch]);
    return (
        <div className="App">
            {!user ? (
                <LoginScreen />
            ) : (
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
