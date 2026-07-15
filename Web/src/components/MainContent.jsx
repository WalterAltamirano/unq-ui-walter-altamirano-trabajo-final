import WordSuccess from "./atoms/WordSuccess";
import { useEffect, useState } from "react";
import ErrorMessage from "./atoms/ErrorMessage";
import { getValidateWord } from "../services/wordService";
import '../styles/stylesMain.css'
import '../styles/index.css'
import Scoreboard from "./ScoreBoard";
import FormWords from "./FormWords";
import CardInfo from "./CardInfo";

const MainContent = ({setHistorial}) => {

    const [error, setError] = useState("");
    const [points, setPoints] = useState(0);
    const [chainedWordsAtTheMoment, setChainedWordsAtTheMoment] = useState([]);
    const [counter, setCounter] = useState(15);
    const [isInGame, setIsInGame] = useState(false);
    useEffect(()=> {
        
    },[error,chainedWordsAtTheMoment,points,counter,isInGame])

    const isChained = (word) => {
        return chainedWordsAtTheMoment.find(wordChained => wordChained === word);
    }
    const isChainable = (word) => {
        return chainedWordsAtTheMoment[0].endsWith(word.charAt(0));
    }
    const runTime = () => {
        return setInterval(() => setCounter(prevCounter => prevCounter - 1),1000)
    }

    const startGame = () => {
        setIsInGame(true);
        const valueForStop = runTime();
        setTimeout(() => {
            clearInterval(valueForStop)
            endGame();
        }, 15000);
        
    }
    const endGame = () => {
        setHistorial(prevHistorial => {
            if(prevHistorial.length === 0) {
                prevHistorial.unshift({number: 0, points: points, acumulateWords: chainedWordsAtTheMoment});
            } else {
                console.log(points)
                prevHistorial.unshift({number: prevHistorial.length, points: points, acumulateWords: chainedWordsAtTheMoment});
            }
            return prevHistorial;
        });
        setIsInGame(false);
        setChainedWordsAtTheMoment([]);
        setPoints(0);
        setCounter(15);
        setError("");
    }

    const verifyIfTheWordSendendExists = async (formData) => {
        const query = formData.get("query");
        if(!query) {
            setError("Por favor, escribi una palabra");
        }else {
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
                setError("La palabra no existe en el diccionario predispuesto");
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
            <section className="section-hero wrapper">
                <article className="">
                    <CardInfo  />
                    <aside className="section-interactive wrapper">
                        <FormWords handleSubmit={verifyIfTheWordSendendExists} isInGame={isInGame} error={error}/>
                        <button type="button" onClick={startGame} disabled={isInGame}>Iniciar Partida</button>
                        {isInGame && <div className="container-success-words">{showWordAtTheMoment()}</div>}
                    </aside>
                    <Scoreboard counter={counter} points={points} />
                </article>
            </section>
        </main>
    );

}

export default MainContent;