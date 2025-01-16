import axios from "axios";

export const loginApi = async (trimmedUsername, trimmedPasswort) => {
    
    try {
        const response = await axios.post(
            `${process.env.BACKEND_URL}/login`,
            { Username: trimmedUsername, Password: trimmedPasswort },
            { withCredentials: true } 
        );
        return response.data; 
    } catch (error) {
        throw error.response?.data.message || "Ein Fehler ist aufgetreten"; // Fehler weiterwerfen
    }
};
