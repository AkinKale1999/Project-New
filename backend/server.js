const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { useNavigate } = require("react-router-dom");
const app = express();
const PORT = 5000;
// ------------------------------------

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

app.use(cors());
app.use(bodyParser.json());

// ------------------------------------
app.post("/login", async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const user = await User.findOne({ Username });

    if (user) {
      res.status(200).json({ message: "Erfolgreich angemeldet" });
    } else {
      res.status(401).json({ message: "Username oder Password nicht gültig" });
    }
  } catch (error) {
    console.log(error);
  }
});

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

      res
        .status(201)
        .json({
          message:
            "Erfolgreich Registriert, Sie werden zum Login weitergeleitet",
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
