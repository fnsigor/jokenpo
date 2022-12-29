import { useState } from 'react'
import { Result } from './pages/ResultPage'
import { Select } from './pages/SelectPage'
import { Score } from './components/Score'


function App() {


   const [selectedGame, setNewGame] = useState(false)
   const [points, setPoint] = useState(0)

   return (
      <>
         <Score points={points}/>
         {selectedGame ? (<Result selectedGame={selectedGame}/>) : (<Select setNewGame={setNewGame}/>)}
      </>
   )
}

export default App
