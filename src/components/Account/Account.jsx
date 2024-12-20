import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Account() {
  function SignOut() {
    document.cookie = "token=; path=/; max-age=0";
    // Setzt den Cookie-Wert auf leer, setzt path auf '/' und max-age auf 0, um den Cookie zu löschen
  }


  const InputFile = "file";

  return (
    <div className="profile-container">
      <nav className="profile-tabs">
        <Link to={"/Account"}>
          <button className="tab active">Dashboard</button>
        </Link>
        <Link to={"/Account/Profil-Details"}>
          <button className="tab">Mein Profil</button>
        </Link>
        <Link to={"/Account/Passwort-Ändern"}>
          <button className="tab">Password ändern</button>
        </Link>
      </nav>

      <div className="profile-details">
        <input type={InputFile} name="Profil-Pic" id="" />

        <h2>Profil Name</h2>
        <p className="username">@Profil Name</p>
        <p className="signout">
          <Link id="signout" to={"/Home"} onClick={SignOut}>
            Abmelden
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Account;
