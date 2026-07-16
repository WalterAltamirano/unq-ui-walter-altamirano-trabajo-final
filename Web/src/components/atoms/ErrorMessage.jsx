import '../../styles/stylesError.css'

const ErrorMessage = ({error}) => {
    return(
        <>
            <span className="error-message">{error}</span>
        </>
    )
}
export default ErrorMessage;