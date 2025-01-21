import { Link } from "react-router-dom"

export default function NotFound() {

    return (<>
        <div id="NotFoundContainer">

            <h1>
                404 Page Not Found
            </h1>

            <Link to="/Home">Zur Home seite</Link>
        </div>
    </>
    )
}