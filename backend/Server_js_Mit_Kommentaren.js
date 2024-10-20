const express = require("express");
// Express: Ein Framework zum Erstellen von Webanwendungen und APIs.
// API: Eine Schnittstelle, die es verschiedenen Anwendungen ermöglicht, miteinander zu kommunizieren.
// zu erstellen und mit HTTP-Anfragen (wie GET, POST) umzugehen.
// Es macht das Schreiben von APIs einfacher.

const cors = require("cors");
// CORS (Cross-Origin Resource Sharing) sorgt dafür, dass Web-Apps
// Daten von anderen Webseiten anfordern kann, ohne blockiert zu werden.
// Ohne CORS würden solche Anfragen vom Browser abgelehnt werden.
// Bsp: Frontend ist auf http://frontend.com, Backend ist auf http://backend.com
// Ohne CORS: Der Browser blockiert die Anfrage vom Frontend an das Backend.
// Mit CORS: Die Anfrage wird erlaubt, und das Frontend kann Daten vom Backend bekommen.

const bodyParser = require("body-parser");
// Der Bodyparser hilft dem Backend, die gesendeten Daten
// richtig zu verstehen, damit du sie nutzen kannst.

const mongoose = require("mongoose");
// IST EINE NoSQL DB, Bibliothek für Node.js
// Mongoose stellt die notwendigen Funktionen bereit, die dabei helfen, mit MongoDB zu arbeiten.
// Er erlaubt, die Struktur der Datenbank zu definieren, z.B. dass alle Namen als Strings gespeichert werden sollen.
// Außerdem ermöglicht er, eine Verbindung zur Datenbank herzustellen, Daten per Code zu senden und abzurufen.

const app = express();
// ein neuer express-server wird erstellt und in der variable app gespeichert.
// express ist eine funktion deswegen muss man die aufrufen und man speichert
// sie dann in der variable app.

const PORT = 5000;
// der PORT auf dem der Express Backend läuft

const bcrypt = require("bcrypt");
// eine Bibliothek, die verwendet wird, um Passwörter sicher zu hashen (verschlüsseln),
// bevor sie in einer Datenbank gespeichert werden.
// Dabei wird das Passwort in eine zufällige Zeichenkette umgewandelt,
// die schwer zu entschlüsseln ist.

// mongoose.connect ist eine Funktion, die eine Verbindung zur MongoDB-Datenbank herstellt.
// "mongodb://localhost:27017/loginApp" ist die Adresse der Datenbank, zu der die Verbindung hergestellt wird.
// Wenn die Datenbank "loginApp" noch nicht existiert, wird sie automatisch erstellt, wenn Daten hineingeschrieben werden.
// MongoDB-Verbindung herstellen
mongoose
  .connect("mongodb://localhost:27017/loginApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB verbunden"))
  .catch((err) => console.error("MongoDB-Verbindung fehlgeschlagen:", err));
// .then = Sinn : nutzt man um festzulegen, was passieren soll, wenn ein Promise erfüllt wurde.
// .catch = Sinn : nutzt man um festzulegen, was passieren soll, wenn ein Fehler aufgetreten ist.

// Parser = Ist einfach nur das umwandeln von Informationen in eine sprache die der computer versteht. z.B. Body-Parser, JSON.parse() usw.

// useNewUrlParser: true = Sinn:
// 1. Früher hatte MongoDB Probleme damit, komplexe URLs zu verstehen, durch useNewUrlParser: true
// kann MongoDB diese URL ohne Probleme verstehen.

// useUnifiedTopology: true = Sinn:
// 1. sorgt für eine stabile Verbindung von Server zur MongoDB, hilft, Verbindungsprobleme zu verringern.
// 2. wählt immer den besten Server im Cluster aus, um Anfragen schnell und zuverlässig zu bearbeiten.
// - z.B. Wenn ein Server überlastet ist oder nicht reagiert, verbindet er sich automatisch mit einem anderen
// Server, der weniger belastet ist und/oder schneller reagiert.

app.use(cors());
// express soll cors nutzen
app.use(bodyParser.json());
// express soll bodyParser nutzen

// IM BACKEND SIND get, post usw. nur trigger

app.post("/login", async (req, res) => {
  // wenn jemand vom Frontend ein post an die /login macht dann
  // wird die async funktion ausgelöst,
  // Die Daten werden im body geschickt
  // IM BACKEND SIND get, post usw. nur trigger

  // console.log(req.body);
  // console.log("Die URL an die ein post gemacht wurde " + req.url);

  const { username, password } = req.body;
  // Solange die Namen der Variablen im Frontend und Backend gleich sind,
  // weiß der Computer, dass der 'username' im Frontend und der 'username' im Backend
  // dasselbe darstellen. Der Body-Parser hilft dabei, den Wert des 'username' vom Frontend
  // an die 'username'-Variable im Backend zu übergeben.

  try {
    // Im try-Block wird der Code ausgeführt, der potenziell Fehler verursachen könnte.
    // Wenn ein Fehler im try-Block auftritt, wird dieser Fehler im catch-Block abgefangen.
    // Der Code im try-Block wird weiter ausgeführt, bis der Fehler auftritt.
    // Wenn ein Fehler auftritt, wird der restliche Code im try-Block übersprungen,
    // und man geht über zum catch-block. Die Anwendung selbst stürzt aber nicht Ab

    const user = await User.findOne({ username });
    // Hier wird überprüft ob es, dem im Login-feld
    // eingetragenen username in der MongoDB gibt

    if (!user) {
      // wenn user = false, heißt der username wurde NICHT gefunden

      return res.status(401).json({ message: "Ungültige Anmeldedaten" });
      // dann gebe Fehlermeldung 401 aus, und überspringe den restlichen Code.
    }

    console.time("How Much time does compare take ?");
    // Misst die zeit, wie lange der Passwortvergleich dauert (in compare wird verglichen)

    const compare = await bcrypt.compare(password, user.password);
    // Überprüft, ob das eingegebene Passwort vom Nutzer im Login-feld,
    // mit dem gehashten Passwort in der Datenbank übereinstimmt.
    // Gibt true zurück, wenn die Passwörter übereinstimmen, andernfalls false.

    console.timeEnd("How Much time does compare take ?");
    // Beendet die Zeitmessung, und gibt sie hier aus.
    // Der Wert der in console.time steht, muss auch in timeEnd stehen.
    // "How Much time does compare take ?"

    if (compare) {
      // wenn Passwort vergleich True ist dann ...

      return res.status(200).json({ message: "Login erfolgreich" });
      // gebe diese Nachricht aus
    } else {
      return res.status(401).json({ message: "Ungültiges Passwort" });
      // ansonsten diese Fehlermeldung
    }
  } catch (error) {
    // Hier werden alle Fehler abgefangen die während der Anmeldung passieren
    // console.log(error)

    return res.status(500).json({ message: "Fehler beim Login" });
    // und hier wird eine Fehlermeldung ausgegeben wenn,
    // beim Login ein Fehler aufgetreten ist
  }
});

// ----------------------------------------

app.post("/register", async (req, res) => {
  // post anfrage an die /register URL

  const { username, password, alter } = req.body;
  // Die Variable 'alter' im Frontend und Backend ist dieselbe, ebenso wie für die anderen.
  // Dadurch weiß der Computer, dass der Wert von 'alter' im Frontend in die Variable
  // 'alter' im Backend eingefügt werden soll.

  try {
    const existingUser = await User.findOne({ username });
    // sucht in der MongoDB ob der im Register feld eingegebene username existiert.

    if (existingUser) {
      // wenn er existiert

      return res
        .status(400)
        .json({ message: "Benutzername existiert bereits" });
      // geben wir eine nachricht aus die sagt der username schon vergeben ist
    } else {
      const saltRounds = 12;
      // Gibt die anzahl der runden an, wie oft die passwörter, die im
      // register-feld eingegebenen wurden, GEHASHED werden sollen.

      console.time("Hashing Passwort");
      // Misst die zeit, wie lange der Passwortvergleich dauert (in compare wird verglichen)

      const salt = await bcrypt.genSalt(saltRounds);
      // Generiert einen zufälligen Salt dem man mit dem Password kombiniert.
      // Jeder salt ist einzigartig

      const hashedPasswort = await bcrypt.hash(password, salt);
      // Hasht das im Registrierungsfeld eingegebene Passwort zusammen mit dem Salt.
      // Der Hash-Wert (das verschlüsselte Passwort) wird dann in der Datenbank gespeichert.
      // Jeder Hash ist einzigartig

      console.timeEnd("Hashing Passwort");
      // Beendet die Zeitmessung, und gibt sie hier aus.
      // Der Wert der in console.time steht, muss auch in timeEnd stehen.
      // "Hashing Passwort"

      const newUser = new User({
        username,
        password: hashedPasswort,
        alter,
      });
      // Hier wird ein neuer Nutzer erstellt, mit den Werten, die vom Frontend übergeben wurden.
      // Das Passwort wird gehashed übergeben

      console.log("BACKEND", newUser, "BACKEND");
      // gibt die werte der 3 variablen wieder im Terminal

      await newUser.save();
      // SPEICHERT den Nutzer und seine werte

      res.status(201).json({ message: "Registrierung erfolgreich" });
      // gibt positive Nachricht wenn es Kein Probleme gibt.
    }
  } catch (error) {
    // fängt fehler ab

    res.status(500).json({ message: "Fehler bei der Registrierung" });
    // gibt fehlermeldung wenn was schief läuft
  }
});

// --------------------------

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  alter: Number,
  source: File,
});
// Definiert den Aufbau/Struktur der MongoDB

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   // Benutzername ist erforderlich
//   password: { type: String, required: true },
//   // Passwort ist erforderlich
//   alter: { type: Number, required: true },
//   // Alter ist erforderlich
// });

const User = mongoose.model("User", userSchema);
// mongoose.model = Funktion die erstellt das Dokument in der MongoDB
// "User" ist der 1te Parameter, der bestimmt wie die DB heißen soll (Frei wählbar).
// userSchema ist der 2te Parameter, der definiert wie das dokument aufgebaut sein soll.

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
