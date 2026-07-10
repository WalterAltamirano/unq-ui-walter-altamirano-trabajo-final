import { useEffect, useState } from "react";
import ErrorMessage from "./atoms/ErrorMessage";
import { getValidateWord } from "../services/wordService";
import '../styles/stylesMain.css'
import '../styles/index.css'
const Main = () => {

    const [error, setError] = useState("");
    const [matchs, setMatchs] = useState([]);

    useEffect(()=> {
    },[error,matchs])

    const verifyIfTheWordSendendExists = async (formData) => {
        setError("");
        const query = formData.get("query");
        if(!query) {
            setError("Por favor, escribi una palabra");
        }else {
            try {
                const response = await getValidateWord(query);
            }catch(error) {
                setError(error.message);
            }
        } 
    }
    const getLastMatch =() => {
        return matchs;
    }
    const updateMatchs = () => {

        const recentMatch = {id: getLastMatch() ,points: 0,}
        setMatchs(prevMatchs => [...prevMatchs, ])
    
    }
    return(
        <main>
            <section className="section-hero wrapper">
                <article className="container-info-card">
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
                    <></>
                </article>
            </section>

            <section className="section-interactive wrapper">
                <form action={verifyIfTheWordSendendExists}>
                    <label for="query">Ingresa tu palabra</label>
                    <input
                        id="query"
                        name="query" 
                        type="text" 
                        placeholder="Escribi la palabra a encadenar"
                    />
                    <button type="submit">Enviar Palabra</button>
                </form>
                {error && <ErrorMessage error={error}/>}
            </section>
        
        </main>
    );

}

export default Main;