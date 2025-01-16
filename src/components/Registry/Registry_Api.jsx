import axios from "axios";

export const registryApi = async (userData) => {
    try {
        const response = await axios.post(
            `${process.env.BACKEND.URL}/register`,
            userData,
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
