import { Link } from "react-router-dom"

export default function NotFound() {

    return (<>
        <div id="NotFoundContainer">

            <div>
                404 Page Not Found
            </div>

            <Link style={{ color: "#0056b3" }} to="/login">Zum Login</Link>
        </div>
    </>
    )
}