import WordSuccess from "./atoms/WordSuccess";
import { useEffect, useState } from "react";
import ErrorMessage from "./atoms/ErrorMessage";
import { getValidateWord } from "../services/wordService";
import '../styles/stylesMain.css'
import '../styles/index.css'
import Scoreboard from "./ScoreBoard";
import FormWords from "./FormWords";

const MainContent = ({setHistorial}) => {

    const [error, setError] = useState("");
    const [points, setPoints] = useState(0);
    const [chainedWordsAtTheMoment, setChainedWordsAtTheMoment] = useState([]);
    const [counter, setCounter] = useState(15);
    const [isInGame, setIsInGame] = useState(false);
    useEffect(() => {
        let timer;
        if (isInGame && counter > 0) {
            timer = setInterval(() => setCounter(prev => prev - 1), 1000);
        } else if (isInGame && counter === 0) {
            endGame();
        }
        return () => clearInterval(timer);
    }, [isInGame, counter]);

    const isChained = (word) => {
        return chainedWordsAtTheMoment.find(wordChained => wordChained === word);
    }
    const isChainable = (word) => {
        return chainedWordsAtTheMoment[0].endsWith(word.charAt(0));
    }

    const initializeGame = () => {
        setCounter(15)
        setPoints(0);
        setChainedWordsAtTheMoment([]);
    }
    const startGame = () => {
        initializeGame();
        setIsInGame(true);
    }
    const endGame = () => {
        setHistorial(prevHistorial => {
            console.log(points);
            prevHistorial.unshift({
                number: prevHistorial.length + 1, 
                points: points, 
                acumulateWords: chainedWordsAtTheMoment
            });
            return prevHistorial;
        });
        setCounter(0);
        setError("");
        setIsInGame(false);
    }

    const verifyIfTheWordSendendExists = async (formData) => {
        const query = formData.get("query");
        if(!query) {
            setError("Por favor, escribi una palabra");
        } else {
            const data = await getValidateWord(query);
            if(data.exists) {
                if(chainedWordsAtTheMoment.length === 0) {
                    chainedWordsAtTheMoment.push(query)
                    setPoints(prevPoints => {
                        return prevPoints + query.length;
                    });
                    setError("");
                } else { 
                    if(!isChained(query)) {
                        if(isChainable(query)) {
                            setChainedWordsAtTheMoment(prevChainedWords => {
                                prevChainedWords.unshift(query)
                                return prevChainedWords;
                            })
                            setPoints(prevPoints => {
                                return prevPoints + query.length;
                            });
                            setError("");
                        } else {
                            setError("La palabra no es encadenable");
                        }
                     } else {
                        setError("La palabra ya fue encadenada");
                    }
                 }
            } else {
                setError("La palabra no existe en el diccionario");
            }
        }
    }
    const showWordAtTheMoment = () => {
        return chainedWordsAtTheMoment.map(word => {
            return <WordSuccess key={word} word={word} />
        })
    }
    
    return(
        <main>
            <section className="section-hero">
                <article className="cnt-sub-hero">
                    <aside className="aside-interactive">
                        <FormWords handleSubmit={verifyIfTheWordSendendExists} isInGame={isInGame} error={error}/>
                        <button className="btn-startGame" type="button" onClick={startGame} disabled={isInGame}>Iniciar Partida</button>
                        <div className="cnt-last-match">
                            <h4>Ultima partida: </h4>
                            <ul className="container-success-words">{showWordAtTheMoment()}</ul>
                        </div>
                    </aside>
                    <Scoreboard counter={counter} points={points} />
                </article>
            </section>
        </main>
    );

}

export default MainContent;