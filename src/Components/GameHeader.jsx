import '../GameHeader.css'

function GameHeader({updateStates}) {
    return (
        <section className='GameHeader'>
            <input type="number" id="dimensionInput" />
            <input type="number" id="minesInput" />
            <button onClick={() => {
                updateStates(document.getElementById('dimensionInput').valueAsNumber, document.getElementById('minesInput').valueAsNumber)
            }}>Börja</button>
        </section>
    );
}

export default GameHeader;