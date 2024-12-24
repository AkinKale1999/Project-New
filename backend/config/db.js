const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);  // MONGO_URL enthält jetzt den vollständigen Verbindungs-String
    console.log("MongoDB verbunden");
  } catch (err) {
    console.error("Fehler bei der MongoDB-Verbindung:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
