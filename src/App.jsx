
import { useState } from 'react'
import './App.css'
import GameHeader from './Components/GameHeader';
import PlayingField from './Components/PlayingField';

function App() {
  const [mines, setMines] = useState(0)
  const [playingField, setPlayingField] = useState(0)
  const [fieldArr, setFieldArr] = useState([])

  function updateStates(dimension, mines) {
    setPlayingField(dimension);
    setMines(mines);
    setFieldArr([...document.querySelector('.PlayingField').children])
    console.log(fieldArr)
  }

  return (
    <div className="App">
      <GameHeader updateStates={updateStates}/>
      <PlayingField dimension = {playingField}/>
    </div>
  )
}

export default App
