import { useEffect, useState } from "react";
import ErrorMessage from "./atoms/ErrorMessage";
import { getValidateWord } from "../services/wordService";
import '../styles/stylesMain.css'
import '../styles/index.css'

const MainContent = () => {

    const [error, setError] = useState("");
    const [points, setPoints] = useState(0);
    const [chainedWordsAtTheMoment, setChainedWordsAtTheMoment] = useState([]);
    const [counter, setCounter] = useState({time: 15});

    useEffect(()=> {
        
    },[error,chainedWordsAtTheMoment,points,counter])

    const isNotChained = (word) => {
        return !chainedWordsAtTheMoment.includes(word);
    }
    const isChainable = (word) => {
        return chainedWordsAtTheMoment[0].endsWith(word.charAt(1));
    }

    const verifyIfTheWordSendendExists = async (formData) => {
        setError("");
        const query = formData.get("query");
        if(!query) {
            setError("Por favor, escribi una palabra");
        }else {
            const data = await getValidateWord(query);
            console.log(data.exists)
            if(chainedWordsAtTheMoment.length === 0) { chainedWordsAtTheMoment.push(query)}
            if(data.exists && isNotChained(query) && isChainable(query)) {
                chainedWordsAtTheMoment.push(query)
                setPoints(prevPoints => prevPoints + 1);
                setError("");
            } else {
                setError("No existe la palabra ingresada");
            }
        } 
    }

    
    return(
        <main>
            <section className="section-hero wrapper">
                <article className="">
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
               
                    <aside className="section-interactive wrapper">
                        <form action={verifyIfTheWordSendendExists}>
                            <label htmlFor="query">Ingresa tu palabra</label>
                            <input
                                id="query"
                                name="query" 
                                type="text" 
                                placeholder="Escribi la palabra a encadenar"
                            />
                            <button type="submit">Enviar Palabra</button>
                            {error && <ErrorMessage error={error}/>}
                        </form>
                        <button type="button">Iniciar Partida</button>
                    </aside>
                    <aside className="section-scoreboard">
                        <div className="container-counter">
                            <h3>Contador</h3>
                            <span>{counter.time}</span>
                        </div>
                        <div className="container-points">
                            <h3>Mis Puntos</h3>
                            <span>{points}</span>
                        </div>
                    </aside>
                </article>
            </section>
        </main>
    );

}

export default MainContent;