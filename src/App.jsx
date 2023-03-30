
import { useState, useEffect } from 'react'
import './App.css'
import GameHeader from './Components/GameHeader';
import PlayingField from './Components/PlayingField';

function App() {
  const [mines, setMines] = useState(0)
  const [playingField, setPlayingField] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)
  let fieldArr = []

  function updateStates(dimension, mines) {
    setPlayingField(dimension);
    setMines(mines);
    setGameRunning(false)
  }

  function reveal(ego, x, array) {
    ego.classList.remove('hidden');
  }

  function placeMines(ego, x, array, mines) {
    let tempArr = [...array];
    tempArr.splice(tempArr.indexOf(ego), 1)
    while (tempArr.length>mines) {
      tempArr.splice(Math.floor(Math.random()*tempArr.length), 1)
    };
    tempArr.forEach(square => {
      square.innerText = '💣'
    })
    console.log(gameRunning)
  }

  function findAdjacent(ego, x, array) {
    let adjacents = []
    if (ego>x) {
      adjacents.push(array[ego-x]);
      if (ego%x!=0) { adjacents.push(array[ego-1-x]) }
      if ((ego+1)%x!=0) { adjacents.push(array[ego+1-x]) }
    }
    if (ego<x*(x-1)) {
      adjacents.push(array[ego+x]);
      if (ego%x!=0) { adjacents.push(array[ego-1+x]) }
      if ((ego+1)%x!=0) { adjacents.push(array[ego+1+x]) }
    }
    if (ego%x!=0) { adjacents.push(array[ego-1]) }
    if ((ego+1)%x!=0) { adjacents.push(array[ego+1]) }
    return adjacents
  }

  useEffect(() => {
    fieldArr = [...document.querySelector('.PlayingField').children]
    fieldArr.forEach(square => {
      square.addEventListener('click', (e) => {
        //console.log(findAdjacent(fieldArr.indexOf(e.target), playingField, fieldArr))
        //reveal(e.target, playingField, fieldArr)
        if (gameRunning == false) {
          placeMines(e.target, playingField, fieldArr, mines);
          setGameRunning(true)
        }
      })
    })
  })

  return (
    <div className="App">
      <GameHeader updateStates={updateStates}/>
      <PlayingField dimension = {playingField}/>
    </div>
  )
}

export default App
