const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB verbunden");
  } catch (err) {
    console.error("Fehler bei der MongoDB-Verbindung:", err);
    process.exit(1); // Beende das Programm, wenn die Verbindung fehlschlägt
  }
};

module.exports = connectDB;
