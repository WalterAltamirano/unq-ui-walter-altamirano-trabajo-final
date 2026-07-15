import '../styles/index.css'
import '../styles/stylesMain.css'


const CardInfo = () => {
    return(
        <aside className="container-info-card">
            <h2>¿Como se juega?</h2>
            <p>
                Es muy facil!; por cada palabra que envies tenes que
                ingresar una palabra que sea posible encadenarla sigueindo
                estas reglas:
            </p>
            <ul>
                <li>
                    <span>La letra final de cada palabra ingresada es la inicial de la siguiente</span>
                </li>
                <li>
                    <span>No podes repetir una palabra ya encadenada</span>
                </li>
                <li>
                    <span>
                        Podes enviar palabras que se te ocurran mientras el contador
                        no haya llegado a cero.
                    </span>
                </li>
            </ul>
        </aside>
    );
}
export default CardInfo;