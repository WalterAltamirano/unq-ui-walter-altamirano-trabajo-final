import '../styles/index.css'
import '../styles/stylesMain.css'
import ErrorMessage from './atoms/ErrorMessage';

const FormWords = ({handleSubmit, isInGame, error}) => {
    
    return(
        <form action={handleSubmit}>
            <h2 className='title-form'>Empezar a jugar</h2>
            <label htmlFor="query">Ingresa tu palabra</label>
            <input
                id="query"
                name="query" 
                type="text" 
                placeholder="Escribi la palabra a encadenar"
            />
            <button className="btn-send-word" type="submit" disabled={!isInGame}>Enviar Palabra</button>
            {error && <ErrorMessage error={error}/>}
        </form>
    );
}

export default FormWords;