import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Movie_House_Logo } from "../utils/constants";

const Header = () => {
  // console.log(isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  function logOutHandler() {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        window.alert("Error"+"-"+error);
      });
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe called when component unmounts which unsubscribe onAuthStateChange()
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex items-center w-screen px-12 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        src={Movie_House_Logo}
        alt="Movie_House_Logo"
        className="w-40"
      />
      {user && (
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-center text-xs">
          <img
            alt="userLogo"
            src={user?.photoURL}
            className="w-12 h-12"
          />
          <p>Welcome {user.displayName}</p>
          </div>

          <button
            className="bg-gradient-to-t from-red-600 to-yellow-400 
          p-2 w-22 h-10 rounded-md font-semibold text-white"
            onClick={logOutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
