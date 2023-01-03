import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // create hook for counter
  const [counter, setCounter] = useState(0)

  const handleGamePlay = (clickedSquare) => {
    // if counter is even // ❌ 
    if (counter % 2 === 0) {
      let updateSquare = [...squares]
      updateSquare[clickedSquare] = '❌'
      setSquares(updateSquare)
    } else {
    // if counter is odd // ⭕️
      let updateSquare = [...squares]
      updateSquare[clickedSquare] = '⭕️'
      setSquares(updateSquare)
    }

    let newCounter = counter + 1

    setCounter(newCounter)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {squares.map((square, index) => {
          return <Square square={square} index={index} handleGamePlay={handleGamePlay} />
        })}
      </div>
    </>
  )
}

export default App