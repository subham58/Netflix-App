import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        //Logged In
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
        console.log(userAuth)
      }
      else{
        //Logged Out
        dispatch(logout())
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path="/profile" element={<ProfileScreen/>}/>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          )}
       
      </Router>
    </div>
  );
}

export default App;
