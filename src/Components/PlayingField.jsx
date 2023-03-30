import '../PlayingField.css'
import FieldSquare from './FieldSquare';

function PlayingField({dimension}) {
    function gridArr(x) {
        const tempArr = []
        for(let i=0; i<x*x; i++) {
            tempArr.push(i)
        }
        return tempArr
    }
    return (
        <article className='PlayingField' style={{gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`}}>
            {gridArr(dimension).map(i => <FieldSquare key = {i} i = {i} />)}
        </article>
    );
}

export default PlayingField;