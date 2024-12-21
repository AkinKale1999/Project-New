const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { Name, Family_Name, Username, Password, Email } = req.body;

  try {
    const existingUser = await User.findOne({ Username });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Benutzername existiert bereits" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    console.log(hashedPassword)

    const newUser = new User({
      Name,
      Family_Name,
      Username,
      Email,
      Password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Erfolgreich registriert!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Fehler bei der Registrierung" });
  }
};

exports.login = async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const user = await User.findOne({ Username });
    if (!user) {
      return res.status(401).json({ message: "Benutzer nicht gefunden" });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Falsches Passwort" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      })
      .json({ message: "Erfolgreich angemeldet" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ein Fehler ist aufgetreten" });
  }
};
