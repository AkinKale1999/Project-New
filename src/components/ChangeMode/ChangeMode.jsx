import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState, useEffect } from 'react';

export default function ChangeMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Lese gespeicherte Werte aus dem localStorage
        const savedBgColor = localStorage.getItem("bgColor") || "#fff";
        const savedTextColor = localStorage.getItem("textColor") || "#000";
        const savedHdColor = localStorage.getItem("hdColor") || "#007bff";
        const savedFtColor = localStorage.getItem("ftColor") || "#007bff";

        // Wende die gespeicherten Werte an
        document.body.style.backgroundColor = savedBgColor;
        document.body.style.color = savedTextColor;

        const header = document.getElementById("navbarDIV");
        const footer = document.getElementById("Footer");

        if (header) header.style.backgroundColor = savedHdColor;
        if (footer) footer.style.backgroundColor = savedFtColor;

        // Prüfe, ob der Modus Dark Mode ist
        setIsDarkMode(savedBgColor === "#000");
    }, []); // Nur beim ersten Rendern ausführen

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        const newBgColor = newMode ? "#000" : "#fff";
        const newTextColor = newMode ? "#fff" : "#000";
        const newHdColor = newMode ? "#000" : "#007bff";
        const newFtColor = newMode ? "#000" : "#007bff";

        // Speichere die neuen Farben im localStorage
        localStorage.setItem("bgColor", newBgColor);
        localStorage.setItem("textColor", newTextColor);
        localStorage.setItem("hdColor", newHdColor);
        localStorage.setItem("ftColor", newFtColor);

        // Wende die neuen Farben an
        document.body.style.backgroundColor = newBgColor;
        document.body.style.color = newTextColor;

        const header = document.getElementById("navbarDIV");
        const footer = document.getElementById("Footer");

        if (header) header.style.backgroundColor = newHdColor;
        if (footer) footer.style.backgroundColor = newFtColor;
    };

    return (
        <div>
            {isDarkMode ? (
                <WbSunnyIcon onClick={toggleMode} className="NavbarElements" />
            ) : (
                <DarkModeIcon onClick={toggleMode} className="NavbarElements" />
            )}
        </div>
    );
}
