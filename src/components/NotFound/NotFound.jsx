import { Link } from "react-router-dom"

export default function NotFound() {

    return (<>
        <div id="NotFoundContainer">

            <div>
                404 Page Not Found
            </div>

            <Link to="/Home">Zur Home seite</Link>
        </div>
    </>
    )
}