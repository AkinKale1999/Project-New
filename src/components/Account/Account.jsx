import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Account() {
  function SignOut() {
    localStorage.removeItem("token");
    localStorage.clear();
  }

  const InputFile = "file";

  return (
    <div className="profile-container">
      <nav className="profile-tabs">
        <Link to={"/Account/Dashboard"}>
          <button className="tab active">Dashboard</button>
        </Link>
        <Link to={"/Account/Profil-Details"}>
          <button className="tab">Profile Details</button>
        </Link>
        <Link to={"/Account/Passwort-Ändern"}>
          <button className="tab">Change Password</button>
        </Link>
      </nav>

      <div className="profile-details">
        <input type={InputFile} name="Profil-Pic" id="" />

        <h2>Profil Name</h2>
        <p className="username">@Profil Name</p>
        <p className="signout">
          <Link to={"/Home"} onClick={SignOut}>
            Abmelden
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Account;
