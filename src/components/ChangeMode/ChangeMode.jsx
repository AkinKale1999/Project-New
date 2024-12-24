import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState, useEffect } from 'react';

export default function ChangeMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const bodyColor = window.getComputedStyle(document.body).backgroundColor;
        setIsDarkMode(bodyColor === "rgb(0, 0, 0)");
    }, []);

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        // Setze die Hintergrundfarbe von body, header und footer
        document.body.style.backgroundColor = newMode ? "#000" : "#fff";
        document.body.style.color = newMode ? "#fff" : "#000";

        const header = document.getElementById("navbarDIV");
        const footer = document.getElementById("Footer");

        // Setze die Hintergrundfarbe des Headers und Footers basierend auf dem Modus
        if (header) {
            header.style.backgroundColor = newMode ? "#000" : "#007bff";
        }

        if (footer) {
            footer.style.backgroundColor = newMode ? "#000" : "#007bff";
        }
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
