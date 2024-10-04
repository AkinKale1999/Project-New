import "./Home.css";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const bürgermenü = useRef(null);

  function OpenNavbar() {
    if (bürgermenü.current) {
      bürgermenü.current.style.transition = "opacity 0.5s ease";
      bürgermenü.current.style.opacity = "0";

      setTimeout(() => {
        bürgermenü.current.style.display = "none";
      }, 505);
    }
  }
  return (
    <>
      <div id="bürgermenüDIV">
        <img
          id="bürgermenü"
          ref={bürgermenü}
          onClick={OpenNavbar}
          src="/img/Bürgermenü.png"
          alt=""
        />
      </div>
      <div id="backgroundDIV">
        <img id="background-pic" src="/img/NIKEWALLPAPER.jpg"></img>
        <div id="FindShoe">
          <p id="ShoeEntdecken">SCHUHE ENTDECKEN</p>

          <div id="ButtonShoeDIV">
            <button id="ShoeButton">Jetzt Entdecken</button>
          </div>
        </div>
      </div>

      <div id="DamenHerrenDIV">
        <div id="WonachDIV">
          <p id="Wonach">Wonach suchst du ?</p>
        </div>

        <div id="DamenDIV">
          <button id="DamenBtn">Damen</button>
        </div>

        <div id="HerrenDIV">
          <button id="HerrenBtn">Herren</button>
        </div>
      </div>

      <div id="LogoDIV">
        <p id="P-img">
          <img id="LogoRotate" src="/img/NUR_LOGO.png" alt="Logo" />
        </p>
      </div>

      <div id="SecretDIV">
        <p id="Secret">Secret</p>
      </div>

      <div id="navbarDIV">
        <nav id="navbar">
          <li className="navbarLI" id="LILogin">
            Login
          </li>
          <li className="navbarLI" id="LIWarenkorb">
            Warenkorb
          </li>
          <li className="navbarLI" id="LIWunschliste">
            Wunschliste
          </li>
        </nav>
      </div>

      <div id="AllImagesDiv">
        <div id="ImageDIV1">
          <img id="img1" className="img" src="/img/Foto1.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe1" className="Schuhe">
              Schuh1
            </button>
          </div>
        </div>

        <div id="ImageDIV2">
          <img id="img2" className="img" src="/img/Foto2.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe2" className="Schuhe">
              Schuh2
            </button>
          </div>
        </div>

        <div id="ImageDIV3">
          <img id="img3" className="img" src="/img/Foto3.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe3" className="Schuhe">
              Schuh3
            </button>
          </div>
        </div>

        <div id="ImageDIV4">
          <img id="img4" className="img" src="/img/Foto4.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe4" className="Schuhe">
              Schuh4
            </button>
          </div>
        </div>

        <div id="ImageDIV5">
          <img id="img5" className="img" src="/img/Foto5.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe5" className="Schuhe">
              Schuh5
            </button>
          </div>
        </div>

        <div id="ImageDIV6">
          <img id="img6" className="img" src="/img/Foto6.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe6" className="Schuhe">
              Schuh6
            </button>
          </div>
        </div>

        <div id="ImageDIV7">
          <img id="img7" className="img" src="/img/Foto7.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe7" className="Schuhe">
              Schuh7
            </button>
          </div>
        </div>

        <div id="ImageDIV8">
          <img id="img8" className="img" src="/img/Foto8.jpg" alt="" />

          <div className="Schuh1DIV">
            <button id="Schuhe8" className="Schuhe">
              Schuh8
            </button>
          </div>
        </div>

        <div id="markenDIV">
          <img id="markePic" src="/img/MARKEN.jpg"></img>
          <div id="FindBtn">
            <p id="textMarke">MARKEN</p>

            <div id="markeBtn">
              <button id="buttonMarke">Hier lang</button>
            </div>
          </div>
        </div>

        <div id="BrandsDIV">
          <img id="Nike" src="/img/Nike.png" alt="Nike" />

          <img id="Adidas" src="/img/Adidas.png" alt="Adidas" />

          <img id="Jordan" src="/img/Jordan.png" alt="Jordan" />

          <img id="Puma" src="/img/Puma.png" alt="Puma" />

          <img id="Converse" src="/img/Converse.png" alt="Converse" />
        </div>
      </div>
    </>
  );
}

export default Home;
