import { useState } from 'react'
import { Result } from './pages/ResultPage'
import { Select } from './pages/SelectPage'
import { Score } from './components/Score'


function App() {

   const [picked, setPickedStatus] = useState(false)
   const [selectedGame, setNewGame] = useState('rock')
   const [points, setPoint] = useState(0)

   return (
      <>
         <Score points={points}/>
         {picked ? (<Result selectedGame={selectedGame}/>) : (<Select setNewGame={setNewGame} setPickedStatus={setPickedStatus}/>)}
      </>
   )
}

export default App
