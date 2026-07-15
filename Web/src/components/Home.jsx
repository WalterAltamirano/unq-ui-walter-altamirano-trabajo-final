
import Footer from './Footer';
import MainContent from './MainContent';
const Home = ({setHistorial}) => {
    return(
        <>
            <MainContent setHistorial={setHistorial}/>
            <Footer />
        </>
    );
}
export default Home;