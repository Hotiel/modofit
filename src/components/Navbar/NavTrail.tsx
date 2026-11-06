import { Link } from "react-router";

function NavTrail (){
    return(
        <nav className="navtrail">
            <Link to="/">MODOFIT</Link>
            <Link to="/modotrail">Inicio</Link>
            <Link to="/modotrail/nosotros">Nosotros</Link>
        </nav>
    )
}

export default NavTrail