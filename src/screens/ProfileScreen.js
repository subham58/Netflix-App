import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
