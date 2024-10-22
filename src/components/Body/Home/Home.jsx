import "./Home.css";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="backgroundDIV">
        <img
          id="background-pic"
          src="/img/NIKEWALLPAPER.jpg"
          alt="Nike-Wallpaper"
        ></img>
      </div>
      {/* ---------------- */}
      <div id="DamenHerrenDIV">
        <p id="Wonach">Wonach suchst du ?</p>

        <button id="DamenBtn">Damen</button>
        <button id="HerrenBtn">Herren</button>
      </div>
      {/* ---------------- */}
      <div id="LogoDIV">
        <img id="LogoRotate" src="/img/NUR_LOGO.png" alt="Logo" />

        <p id="Secret">Secret</p>
      </div>
      {/* ---------------- */}
      <div id="AllImagesDiv">
        <div id="ImageDIV1">
          <img id="img1" className="img" src="/img/Foto1.jpg" alt="" />

          <button id="Schuhe1" className="Schuhe">
            Schuh1
          </button>
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

        <div id="DIVumGanzeSchuh">
          <div id="markenDIV">
            <img id="markePic" src="/img/MARKEN.jpg" alt="Brands"></img>
          </div>

          <div id="textBtnMarke">
            <p id="textMarke">MARKEN</p>
            <button id="buttonMarke">Hier lang</button>
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
