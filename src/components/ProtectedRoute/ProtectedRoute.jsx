import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

export default function ProtectedRoute({ children }) {

    const isAuthenticated = useAuth()

    if (!isAuthenticated) {

        return <Navigate to="/home" replace />
    }

    else {
        return children;
    }

}