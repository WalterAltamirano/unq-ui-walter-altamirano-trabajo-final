import '../styles/stylesHeader.css'
import '../styles/index.css'
import { Link } from 'react-router';
const NavBar = () => {
    return(
        <header>
            <h1>Palabras Encadenadas</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="link-historial" to="/historial">Ver mi historial</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar;