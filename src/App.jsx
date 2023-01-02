import { useState } from 'react'
import { ResultPage } from './pages/ResultPage'
import { SelectGamePage } from './pages/SelectPage'
import { Score } from './components/Score'
import styled, { css } from 'styled-components'

function App() {

   const Content = styled.main`
      display: flex;
      flex-direction: column;
      height: 100vh;
   `

   const [game, setNewGame] = useState({ img: undefined, value: undefined, isSelected: false })
   const [score, setScore] = useState(0)


   return (
      <Content>
         <Score score={score} />

         {game.isSelected
            ? (<ResultPage selectedGame={game} setScore={setScore} setNewGame={setNewGame} />)
            : (<SelectGamePage setNewGame={setNewGame} />)
         }
         
      </Content>
   )
}

export default App
