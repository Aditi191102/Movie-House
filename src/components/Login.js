import React, { useRef } from "react";
import { PiEyesBold, PiEyesThin } from "react-icons/pi";
import Header from "./Header";
import { useState } from "react";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  validateEmailDetails,
  validatePasswordDetails,
} from "../utils/validation";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { background_Img, user_Icon } from "../utils/constants";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [emailErr,setEmailErr] = useState(null);
  // const [passErr,setPassErr] = useState(null);

  const dispatch = useDispatch();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [err, setErr] = useState({
    emailInfo: null,
    passwordInfo: null,
  });

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function passwordHandler() {
    if (!isPasswordVisible) setPasswordVisible(true);
    else setPasswordVisible(false);
  }

  function formHandler() {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }

  function clickHandler() {
    const mailInfo = validateEmailDetails(email.current.value);
    const passInfo = validatePasswordDetails(password.current.value);
    setErr({
      ...err,
      emailInfo: mailInfo, // when the name of variable and keys are same
      // then we can directly use key name syntax(e.g. {emailInfo,passwordInfo})
      passwordInfo: passInfo,
      // errorCode, errorMessage
    });
    if (mailInfo || passInfo) return;

    // console.log(mailInfo);
    // console.log(passInfo);
    // setEmailErr(emailInfo);
    // setPassErr(passwordInfo);

    if (!isLoggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_Icon,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErr({ ...err, errorMEssage: error.message });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(error);
          // ..
          setErr({
            ...err,
            emailInfo: errorCode, // when the name of variable and keys are same
            passwordInfo: errorMessage, // then we can directly use key name syntax(e.g. {emailInfo,passwordInfo})

            // errorCode, errorMessage
          });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErr({
            ...err,
            emailInfo: errorCode,
            passwordInfo: errorMessage,
          });
        });
    }
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={background_Img} alt="background_Img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-14 bg-black text-white w-3/12 mx-auto right-0 left-0 my-36 opacity-80 rounded-lg"
      >
        <h2 className="text-2xl font-bold rounded-md">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h2>

        <div className="my-2">
          {!isLoggedIn && (
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                ref={name}
                placeholder="First Name"
                className="p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
              rounded-md apperance-none leading-tight focus:outline-none"
              />

              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                className="p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
              rounded-md apperance-none leading-tight focus:outline-none"
              />
            </div>
          )}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            ref={email}
            className="p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
            rounded-md apperance-none leading-tight focus:outline-none"
          />
          <div className="text-red-600">{err.emailInfo}</div>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter Your Password"
            ref={password}
            className="p-4 my-4 bg-gray-900 w-full text-white hover:border border-white
           hover:bg-black rounded-md apperance-none leading-tight focus:outline-none"
          />
          {isPasswordVisible ? (
            <PiEyesBold
              className="absolute left-72 bottom-48 transform -translate-y-1/2 cursor-pointer text-white text-sm"
              onClick={passwordHandler}
            />
          ) : (
            <PiEyesThin
              className="absolute left-72 bottom-48 transform -translate-y-1/2 cursor-pointer text-zinc-400 text-sm"
              onClick={passwordHandler}
            />
          )}

          <div className="text-red-600">{err.passwordInfo}</div>
        </div>

        <button
          className="font-bold  text-xl bg-gradient-to-tl from-red-600 to-yellow-400 p-2 my-2 
          hover:from-yellow-400 hover:to-red-600 ... w-full rounded-md"
          onClick={clickHandler}
        >
          Submit
        </button>

        <div className="flex justify-between">
          <div className="cursor-pointer">
            <input type="checkbox" id="check-box" />
            <label htmlFor="check-box" className="checked:border-blue-700">
              Remember Me
            </label>
          </div>

          <p className="text-yellow-400 flex flex-col">
            {isLoggedIn ? "New User?" : "Existing User"}
            <span
              className="text-orange-400 hover:underline text-xs cursor-pointer"
              onClick={formHandler}
            >
              {isLoggedIn ? "Register Here" : "Sign In Here"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
