import '../../styles/stylesMain.css'

const WordSuccess = ({word}) => {

    return(
        <li>
            <span className="word-chained">{`${word.substring(0,word.length -1)}`}<strong className='last-char'>{word.charAt(word.length - 1 )}</strong></span>
        </li>
    );
}
export default WordSuccess;