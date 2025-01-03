import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // console.log(isLoggedIn);
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  console.log(user);
  function logOutHandler() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        window.alert("Error");
      });
  }

  return (
    <div className="absolute flex items-center w-screen px-12 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        src="/Screenshot 2024-12-20 234937-Photoroom.png"
        alt="img"
        className="w-40"
      />
      {user && (
        <div className="flex gap-3 items-center">
          <img
            src="https://occ-0-4412-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229"
            alt="userLogo"
            className="w-12 h-12"
          />
          <p>{user?.displayName}</p>

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
