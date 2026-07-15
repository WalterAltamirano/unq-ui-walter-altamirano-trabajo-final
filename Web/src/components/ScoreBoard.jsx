import '../styles/index.css'
import '../styles/stylesMain.css'

const Scoreboard = ({counter, points}) => {
    return(
        <aside className="section-scoreboard">
            <div className="container-counter">
                <h3>Contador</h3>
                <span>{counter}</span>
            </div>
            <div className="container-points">
                <h3>Mis Puntos</h3>
                <span>{points}</span>
            </div>
        </aside>
    );
} 

export default Scoreboard;