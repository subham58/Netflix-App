import React, { useRef } from "react";
import { auth } from "../firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import "./SignUpScreen.css";
const SignUpScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const auth = getAuth();

  const register = (e) =>{
    e.preventDefault();   
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log('hELLO',authUser)
    })
    .catch((error)=>{
      alert(error.message);
    });
  }
  const signIn = (e) =>{

    e.preventDefault();
    signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser)
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div className="signupScreen">

      <form>
        <h1>Sign IN</h1>
        <input ref={emailRef} type="email"  placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>Sign Up Now</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
