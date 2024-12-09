import { Link } from "react-router-dom"

export default function NotFound() {

    return (<>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "93vh", width: "100%", gap: "20px", flexDirection: "column", fontSize: "1.5rem" }}>

            <div>
                404 Page Not Found
            </div>

            <Link style={{ color: "#0056b3" }} to="/login">Zum Login</Link>
        </div>
    </>
    )
}