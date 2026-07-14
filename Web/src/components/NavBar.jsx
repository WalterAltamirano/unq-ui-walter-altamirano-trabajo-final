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
                        <Link to="/historial">Ver mi historial</Link>
                    </li>
                    <li>
                        TUki
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar;