const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
// ------------------------------------

app.use(cors());
app.use(bodyParser.json());

// ------------------------------------
app.post("/login", (req, res) => {
  const { Username, Password } = req.body;
  if (Username === "akin" && Password === "123") {
    console.log(req.body);
    return res.status(200).json({ message: "Login erfolgreich" });
  } else {
    return res.status(401).json({ message: "Ungültige Anmeldedaten" });
  }
});

// ------------------------------------
app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
