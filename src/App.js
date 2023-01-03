import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleGamePlay = (clickedSquare) => {
    let updateSquare = [...squares]
    updateSquare[clickedSquare] = '❌'
    setSquares(updateSquare)
  }
  // ❌ ⭕️

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