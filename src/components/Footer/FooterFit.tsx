import { Link } from "react-router";

function FooterFit() {
    return (
        <footer>

            <h4>MODO FIT | ENTRENA DISTINTO</h4>

            <div className="footer-main">
                
                <div className="nav-footer">
                    <h5>Navegacion</h5>
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros-fit">Nosotros</a>
                    <a href="#contact-fit">Contacto</a>
                    <Link to="/modotrail">MODOTRAIL</Link>
                </div>

                <div className="contact-footer">
                        <p>Av. Belgrano y Amado Nervo, Cosquin</p>
                
                    <div>
                        <i>redes footer 1</i>
                        <i>redes footer 2</i>
                    </div>
                </div>
            </div>

            <div className="footer-copy">
                <p>© 2026 MODO FIT</p>
                <p>Desarrollado por Leonardo Polidori</p>
            </div>
        </footer>   

);
}

export default FooterFit