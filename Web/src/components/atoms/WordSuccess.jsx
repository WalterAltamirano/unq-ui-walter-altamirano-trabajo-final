import '../../styles/stylesMain.css'

const WordSuccess = ({word}) => {

    return(
        <>
            <span className="word-chained">{`${word.substring(0,word.length -1)}`}<strong className='last-char'>{word.charAt(word.length - 1 )}</strong></span>
        </>
    );
}
export default WordSuccess;