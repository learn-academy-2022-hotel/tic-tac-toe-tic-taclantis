import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // create hook for counter
  const [counter, setCounter] = useState(0)

  const [playerX, setPlayerX] = useState([])

  const [playerO, setPlayerO] = useState([])

  const winningCombos = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]

  const checkWinner = () => {
    for (let i=0; i<winningCombos.length; i++) {
      let counterX = 0
      let counterO = 0
      let arr = winningCombos[i]
      for (let j=0; j<arr.length; j++) {
        if (playerX.includes(arr[j])){
          counterX ++ 
          if (counterX === 3) {
            alert("Player X wins!")
          } 
        }
      }
      }
    }
    console.log("checkWinner")
  
  
  const handleGamePlay = (clickedSquare) => {
    if (squares[clickedSquare] !== null) {
      // console.log(null)
      return
    }
    // if counter is even // ❌ 
    if (counter % 2 === 0) {
      let updateSquare = [...squares]
      updateSquare[clickedSquare] = '❌'
      setSquares(updateSquare)
      setPlayerX([...playerX, clickedSquare])
    } else {
      // if counter is odd // ⭕️
      let updateSquare = [...squares]
      updateSquare[clickedSquare] = '⭕️'
      setSquares(updateSquare)
      setPlayerO([...playerO, clickedSquare])
    }

    if (counter >= 4) {
      checkWinner()
    }
    
    console.log(playerX)

    let newCounter = counter + 1

    setCounter(newCounter)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {squares.map((square, index) => {
          return <Square key={index} square={square} index={index} handleGamePlay={handleGamePlay} />
        })}
      </div>
    </>
  )
}

export default App