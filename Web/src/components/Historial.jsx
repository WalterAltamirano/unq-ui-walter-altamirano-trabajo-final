import { useState } from "react";


const Historial = () => {

    const [matchs, setMatchs] = useState([]);


    const getLastMatch =() => {
        return matchs[0];
    }
    const updateMatchs = () => {
        const recentMatch = {id: getLastMatch(),points: 0,}
        setMatchs(prevMatchs => [...prevMatchs, recentMatch])

    }


  return(
    <>
        <p>APARECE EL HISTORIAL ACA</p>
    </>
  );
    
}

export default Historial;