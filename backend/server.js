const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middlewares/authMiddleware");

dotenv.config();
const app = express();
const PORT = 5000;

connectDB();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Geschützte Daten", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
