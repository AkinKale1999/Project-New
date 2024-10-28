const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Login-Route
app.post("/login", (req, res) => {
  const { Username, Password } = req.body;
  if (Username === "akin" && Password === "123") {
    console.log(req.body)
    return res.status(200).json({ message: "Login erfolgreich" });
  } else {
    return res.status(401).json({ message: "Fehler: Ungültige Anmeldedaten" });
  }
});
// Start des Servers
app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});