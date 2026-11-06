import { Link } from "react-router";

function NavFit (){
    return(
        <nav className="navfit">
            <a href="#nosotros-fit">Nosotros</a>
            <a href="#contact-fit">Contacto</a>
            <Link to="/modotrail">MODOTRAIL</Link>
        </nav>
    )
}
export default NavFit