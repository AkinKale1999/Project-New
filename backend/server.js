// Importiere die benötigten Module
const express = require("express"); // Express Framework für die Server-Entwicklung
const cors = require("cors");
// Middleware : Mit CORS: Die Anfrage wird erlaubt, und das Frontend kann Daten vom Backend bekommen.
const bodyParser = require("body-parser"); // Middleware zum Parsen von JSON-Anfragen
const mongoose = require("mongoose"); // MongoDB-ODM (Object Data Modeling)
const bcrypt = require("bcrypt"); // Bibliothek zum Verschlüsseln von Passwörtern (wird im Moment nicht verwendet)
const app = express(); // Erstelle eine Instanz von Express
const dotenv = require("dotenv"); // Ermöglicht das Laden von Umgebungsvariablen aus einer .env-Datei
const jwt = require("jsonwebtoken"); // Bibliothek zum Erstellen und Verifizieren von JWTs (JSON Web Tokens)
const cookieParser = require("cookie-parser"); // Middleware zum Parsen von Cookies

// Konfiguration der Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Ermöglicht CORS für das Frontend auf localhost:3000
app.use(bodyParser.json()); // Ermöglicht das Parsen von JSON-Daten in den Anfragen
app.use(cookieParser()); // Ermöglicht das Parsen von Cookies in den Anfragen

dotenv.config(); // Lade Umgebungsvariablen aus der .env-Datei
const SECRET_KEY = process.env.SECRET_KEY; // Geheimschlüssel für JWT (wird aus der .env-Datei geladen)
const PORT = 5000; // Port, auf dem der Server laufen wird

// MongoDB-Verbindung
mongoose
  .connect(process.env.MONGO_URL) // Verbinde mit der MongoDB-Datenbank
  .then(() => console.log("MongoDB Verbunden")) // Erfolgreiche Verbindung
  .catch((err) => console.error("MongoDB-Verbindung fehlgeschlagen: ", err)); // Fehler, wenn Verbindung fehlschlägt

// Definiere das Schema für den Benutzer in MongoDB
const userSchema = new mongoose.Schema({
  Name: String,
  Family_Name: String,
  Username: String,
  Alter: Number,
  Email: String,
  Password: String, // Das Passwort wird hier nicht verschlüsselt gespeichert, was nicht sicher ist.
});

// Erstelle das Modell für den Benutzer
const User = mongoose.model("User", userSchema);

// ------------------------------------

// Login-Route
app.post("/login", async (req, res) => {
  const { Username, Password } = req.body; // Hole Benutzername und Passwort aus dem Request-Body

  try {
    // Suche nach einem Benutzer mit dem angegebenen Benutzernamen und Passwort
    const user = await User.findOne({ Username, Password });

    if (user) {
      // Wenn der Benutzer existiert, erstelle ein JWT-Token
      const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
        expiresIn: "1d", // Das Token ist 1 Tag gültig
      });

      // Sende das Token im Cookie an den Client zurück
      res
        .status(200) // HTTP-Status 200: Erfolg
        .cookie("token", token, {
          httpOnly: true, // Verhindert, dass das Cookie im Browser zugänglich ist (schützt vor XSS)
          secure: false, // Setze `true` auf HTTPS (sicherer)
          sameSite: "strict", // Verhindert, dass das Cookie von anderen Websites gesendet wird
        })
        .json({ message: "Erfolgreich angemeldet" }); // Erfolgsnachricht
    } else {
      res.status(401).json({ message: "Username oder Password nicht gültig" }); // Fehler bei ungültigen Anmeldedaten
    }
  } catch (error) {
    console.log(error); // Fehlerprotokollierung
    res.status(500).json({ message: "Ein Fehler ist aufgetreten" }); // Fehler bei der Anfrage
  }
});

// ------------------------------------

// Middleware zum Überprüfen des JWT-Tokens
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Holen den Tokenn aus den Cookies
  if (!token) return res.sendStatus(401); // Wenn kein Token vorhanden, wird der Zugriff verweigert

  // Überprüfe das Token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Fehler bei der Token-Verifizierung
    req.user = user; // Benutzerinformationen aus dem Token speichern
    next(); // Weiter zur nächsten Middleware oder Route
  });
};

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Geschützte Daten", user: req.user }); // Gibt geschützte Daten zurück
});

// ------------------------------------

// Registrierungs-Route
app.post("/register", async (req, res) => {
  const { Name, Family_Name, Username, Password, Email } = req.body; // Hole Benutzerdaten aus dem Request-Body

  try {
    // Überprüfe, ob der Benutzername bereits existiert
    const existingUser = await User.findOne({ Username });

    if (existingUser) {
      res.status(400).json({ message: "Benutzername existiert bereits" }); // Fehler, wenn der Benutzername schon vergeben ist
    } else {
      // Erstelle einen neuen Benutzer
      const newUser = new User({
        Name,
        Family_Name,
        Username,
        Email,
        Password, // Passwort sollte hier sicherer gespeichert werden (z.B. mit bcrypt)
      });

      await newUser.save(); // Speichern des neuen Benutzers in der Datenbank

      res.status(201).json({
        message: "Erfolgreich Registriert, Sie werden zum Login weitergeleitet", // Erfolgsnachricht
      });
    }
  } catch (error) {
    console.log(error); // Fehlerprotokollierung
    res.status(500).json({ message: "Fehler bei der Registrierung" }); // Fehler bei der Registrierung
  }
});

// ------------------------------------

// Starte den Server auf dem angegebenen Port
app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`); // Zeigt an, dass der Server läuft
});
