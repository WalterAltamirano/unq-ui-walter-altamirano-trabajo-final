import { Link } from "react-router";

const NotFoundContent = () => {
    return(
        <>
            <h3>
                Ups, esta pagina no existe. Por favor <Link to="/home">volve al menu principal</Link>.
            </h3>
           
        </>
    );
}
export default NotFoundContent;