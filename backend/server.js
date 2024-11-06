const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser.json());

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/loginApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Verbunden"))
  .catch((err) => console.error("MongoDB-Verbindung fehlgeschlagen: ", err));

const userSchema = new mongoose.Schema({
  Name: String,
  Family_Name: String,
  Username: String,
  Alter: Number,
  Email: String,
  Password: String,
});

const User = mongoose.model("User", userSchema);
// ------------------------------------

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Geschützte Daten", user: req.user });
});

// ------------------------------------
app.post("/login", async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const user = await User.findOne({ Username, Password });

    if (user) {
      const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      // const token usw. wird an das frontend als response geschickt und aktualisiert
      // dadurch den const token im frontend sodass man dem Angemeldeten User einen gültigen token gibt
      // jwt.sign = Erstellt Neuen token, brauch mindestens 2 Parameter(Payload, SECRET_KEY(geheimer Schlüssel))
      // ({ userId: user._id } = JS Objekt, nimmt von der Variable user die _id, Quasi aus der MongoDB die jeweilige _id des User
      // SECRET_KEY = Password das in der .env gespeichert ist
      // expiresIn = gibt an wie lange der TOKEN gültig ist.

      res.status(200).json({ message: "Erfolgreich angemeldet", token });
    } else {
      res.status(401).json({ message: "Username oder Password nicht gültig" });
    }
  } catch (error) {
    console.log(error);
  }
});
// ALLES WAS IM app.post(app.get usw. auch) DRINNE IST DAS MIT res gecoded WURDE,WIRD AN DAS FRONTED GESCHICKT
// MAN KANN NUR MIT res.status, res.json usw. ETWAS AN DAS FRONTEND SCHICKEN(res muss angewendet werden).

// ------------------------------------
app.post("/register", async (req, res) => {
  const { Name, Family_Name, Username, Password, Email } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ Username });

    if (existingUser) {
      res.status(400).json({ message: "Benutzername existiert bereits" });
      return;
    } else {
      const newUser = new User({
        Name,
        Family_Name,
        Username,
        Email,
        Password,
      });

      await newUser.save();

      console.log("Erfolgreich Registriert", newUser);

      res.status(201).json({
        message: "Erfolgreich Registriert, Sie werden zum Login weitergeleitet",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fehler bei der Registrierung" });
  }
});

// ------------------------------------

app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
