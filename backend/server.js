const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");


mongoose
.connect("mongodb://localhost:27017/loginApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB verbunden"))
  .catch((err) => {
    console.error("MongoDB-Verbindung fehlgeschlagen:", err);
  });
  
  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    alter: Number,
    source: { type: String, default: "no-image.png"},
  });

const User = mongoose.model("User", userSchema);


// ------------------------------------------

app.use(cors());
app.use(bodyParser.json());

// ------------------------------------------------------------

app.post("/login", async (req, res) => {
  // console.log(req.body);
  // console.log("Die URL an die ein post gemacht wurde " + req.url);

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Ungültige Anmeldedaten" });
    }

    console.time("How Much time does compare take ?");

    const compare = await bcrypt.compare(password, user.password);

    console.timeEnd("How Much time does compare take ?");

    if (compare) {
      return res.status(200).json({ message: "Login erfolgreich" });
    } else {
      return res.status(401).json({ message: "Ungültiges Passwort" });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Fehler beim Login" });
  }
});

// ------------------------------------------------------------

app.post("/register", async (req, res) => {
  const { username, password, alter } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Benutzername existiert bereits" });
    } else {
      const saltRounds = 12;

      console.time("Hashing Passwort");

      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPasswort = await bcrypt.hash(password, salt);

      console.timeEnd("Hashing Passwort");

      const newUser = new User({
        username,
        password: hashedPasswort,
        alter,
        source: "no-image.png"
      });

      console.log("BACKEND", newUser, "BACKEND");

      await newUser.save();

      res.status(201).json({ message: "Registrierung erfolgreich" });
    }
  } catch (error) {
    res.status(500).json({ message: "Fehler bei der Registrierung" });
  }
});

// ------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   // Benutzername ist erforderlich
//   password: { type: String, required: true },
//   // Passwort ist erforderlich
//   alter: { type: Number, required: true },
//   // Alter ist erforderlich
// });

// -------------------------------------------------------

// const uploadDir = "uploads";

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },

//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/images", upload.single("image"), async (req, res) => {

//   if (!req.file) {
//     return res.status(400).send({ message: "Kein Bild hochgeladen" });
//   }
//   const source = req.file.path;
//   console.log("DAS BILD IST ANGEKOMMEN ", source);

// });
// ------------------------------------------------------------
