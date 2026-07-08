import { useState } from "react";
import { getValidateWord } from "../services/wordService";
import ErrorMessage from "./atoms/ErrorMessage";
const Main = () => {

    const [wordToSend, setWordToSend] = useState("");
    const [error, setError] = useState("");

    const verifyIfTheWordSendendExists = async (e) => {
        e.preventDefault()
        if(!wordToSend) {
            setError("Por favor, escribi una palabra");
        }else {
            try {
                const response = await getValidateWord(wordToSend);
                console.log(response);
            }catch(error) {
                setError(error.message);
            }
        }

    }

    return(
        <main>
            <section>
                <h1>Palabras Encadenadas</h1>
                <p>
                    El juego es facil; por cada palabra que envies tenes que
                    ingresar una palabra que sea posible encadenarla.
                    De esta manera:
                </p>
                <ul>
                    <li>
                        <span>La letra final de cada palabra es la inicial de la siguiente</span>
                    </li>
                    <li>
                        <span>No podes repetir una palabra ya encadenada</span>
                    </li>
                    <li>
                        <span></span>
                    </li>
                </ul>
                <article>
                    <h2></h2>
                    <p></p>
                    <></>
                </article>
            </section>

            <section>
                <form action={verifyIfTheWordSendendExists}>
                    <input
                        onChange={wordToSend}
                        id="word"
                        name="word" 
                        type="text" 
                        placeholder="Escribi la palabra a encadenar"
                    />
                    <button type="button">Enviar Palabra</button>
                </form>
                {error && <ErrorMessage error={error}/>}
            </section>
        
        </main>
    );

}

export default Main;