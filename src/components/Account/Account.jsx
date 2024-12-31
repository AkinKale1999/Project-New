import React, { useState } from "react";
import { Link } from "react-router-dom";

function Account() {
  function SignOut() {
    document.cookie = "token=; path=/; max-age=0";
  }

  const [SelectPic, setSelectPic] = useState()


  const InputFile = "file";

  return (
    <div className="profileContainer">
      <nav className="profileTabs">
        <Link to={"/app/account"}>
          <button className="tab">Dashboard</button>
        </Link>
        <Link to={"/app/account/profil-details"}>
          <button className="tab">Mein Profil</button>
        </Link>
        <Link to={"/app/account/passwort-ändern"}>
          <button className="tab">Password ändern</button>
        </Link>
      </nav>

      <div className="profileDetails">
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
