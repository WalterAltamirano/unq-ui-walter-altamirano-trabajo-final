import '../styles/stylesHistorial.css'
import '../styles/index.css'

const Match = ({number,points,acumulateWords}) => {
    return(
        <aside className="container-info-match">
            <h3>Partida numero: {number}</h3>
            <span>Puntos en la partida: {points}</span>
            <div className='container-word-acumulates'>
                {acumulateWords.map(word => {
                    return <span className='word-acumulate'>{`${word} `}</span>
                })}
            </div>
        </aside>
    );
}
export default Match;