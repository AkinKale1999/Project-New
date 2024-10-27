const express = require("express");
const cors = require("cors");
const Bodyparser = require("body-parser");
const app = express();
const PORT = 5000;
// ---------------------------------------

app.use(cors());
app.use(Bodyparser.json());

// ---------------------------------------
app.post("/login", async (req, res) => {
  const { Username, Password } = req.body;
v
  if (Username === "akin" && Password === "123") {
    return res.status(200).json({ message: "Login Gut" });
  } 
  else {
    return res.status(401).json({ message: "Fehler" });
  }
});

// ---------------------------------------
app.listen(() => {
  console.log(`Backend läuft auf ${PORT}`);
});
