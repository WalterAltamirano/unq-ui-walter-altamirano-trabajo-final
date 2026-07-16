import MainContent from './MainContent';
const Home = ({setHistorial, historial}) => {
    return(
        <>
            <MainContent setHistorial={setHistorial} historial={historial}/>
        </>
    );
}
export default Home;