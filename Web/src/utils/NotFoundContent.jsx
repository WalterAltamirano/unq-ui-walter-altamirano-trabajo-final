import { Link } from "react-router";
import '../styles/index.css'
const NotFoundContent = () => {
    return(
        <div className="cnt-not-found">
            <h3 className="title-not-found">
                Ups, esta pagina no existe. Por favor <Link className="link-not-found" to="/home">volve al menu principal</Link>.
            </h3>
           
        </div>
    );
}
export default NotFoundContent;