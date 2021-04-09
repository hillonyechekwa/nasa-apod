import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/">Take me home</Link>
            </ul>
        </div>
    )
}