import { useState } from 'react'
import { Result } from './pages/ResultPage'
import { Select } from './pages/SelectPage'
import { Score } from './components/Score'
import styled, { css } from 'styled-components'

function App() {

   const Content = styled.main`
      display: flex;
      flex-direction: column;
      height: 100vh;
   `

   const [selectedGame, setNewGame] = useState(false)
   const [points, setPoint] = useState(0)

   return (
      <Content>
         <Score points={points}/>
         {selectedGame ? (<Result selectedGame={selectedGame} setPoint={setPoint}/>) : (<Select setNewGame={setNewGame}/>)}
      </Content>
   )
}

export default App
