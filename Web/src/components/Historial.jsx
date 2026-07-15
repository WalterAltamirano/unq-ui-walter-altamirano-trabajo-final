import { useEffect, useState } from "react";
import '../styles/index.css'
import '../styles/stylesHistorial.css'
import Match from "./Match";

const Historial = ({historial}) => {
    
    useEffect(() => {

    }, [historial])
  return(
    <section className="section-historial">
        <h2 className="title-historial">Historial de Partidas Jugadas</h2>
        {historial.length != 0 && 
            <ul className="container-matchs">
                {historial.map(match => {
                    return <Match {...match} />
                })}
            </ul>
        }
    </section>
  );
    
}

export default Historial;