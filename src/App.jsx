import { useEffect, useState } from 'react'
import { ResultPage } from './pages/ResultPage'
import { SelectGamePage } from './pages/SelectPage'
import { Score } from './components/Score'
import styled, { css } from 'styled-components'
import { Rules } from './components/Rules'

import rock from './assets/games/icon-rock.svg'
import paper from './assets/games/icon-paper.svg'
import scissors from './assets/games/icon-scissors.svg'
import lizard from './assets/games/icon-lizard.svg'
import spock from './assets/games/icon-spock.svg'

const Content = styled.main`
      display: flex;
      flex-direction: column;
      height: 100vh;
   `

function App() {

   const [game, setNewGame] = useState({ img: undefined, value: undefined, isSelected: false })
   const [score, setScore] = useState(0)
   const [machineGame, setMachineGame] = useState({ img: undefined, value: undefined })
   const [result, setResult] = useState('')

   const [showRule, setShowRule] = useState(false)

   function updateMachineGame() {

      const games = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock']
      const randomNumber = Math.floor(Math.random() * (games.length - 0) + 0)


      switch (games[randomNumber]) {

         case 'Scissors':
            setMachineGame({ img: scissors, value: 'Scissors' })
            break;

         case 'Paper':
            setMachineGame({ img: paper, value: 'Paper' })
            break;

         case 'Rock':
            setMachineGame({ img: rock, value: 'Rock' })
            break;

         case 'Lizard':
            setMachineGame({ img: lizard, value: 'Lizard' })
            break;

         case 'Spock':
            setMachineGame({ img: spock, value: 'Spock' })
            break;
      }
   }



   function getResult() {
      switch (game.value) {

         case 'Scissors':
            if (machineGame.value === 'Scissors') {
               setResult('Empate')

            } else if (machineGame.value === 'Paper' || machineGame.value === 'Lizard') {
               setResult('Win')
               setTimeout(() => setScore(score + 1), 1000)
            } else {
               setResult('Lose')
               setTimeout(() => setScore(0), 1000)
            }
            break;



         case 'Paper':
            if (machineGame.value === 'Paper') {
               setResult('Empate')

            } else if (machineGame.value === 'Rock' || machineGame.value === 'Spock') {
               setResult('Win')
               setTimeout(() => setScore(score + 1), 1000)
            } else {
               setResult('Lose')
               setTimeout(() => setScore(0), 1000)
            }
            break;


         case 'Rock':
            if (machineGame.value === 'Rock') {
               setResult('Empate')

            } else if (machineGame.value === 'Scissors' || machineGame.value === 'Lizard') {
               setResult('Win')
               setTimeout(() => setScore(score + 1), 1000)
            } else {
               setResult('Lose')
               setTimeout(() => setScore(0), 1000)
            }
            break;

         case 'Lizard':
            if (machineGame.value === 'Lizard') {
               setResult('Empate')

            } else if (machineGame.value === 'Paper' || machineGame.value === 'Spock') {
               setResult('Win')
               setTimeout(() => setScore(score + 1), 1000)
            } else {
               setResult('Lose')
               setTimeout(() => setScore(0), 1000)
            }
            break;


         case 'Spock':
            if (machineGame.value === 'Spock') {
               setResult('Empate')

            } else if (machineGame.value === 'Scissors' || machineGame.value === 'Rock') {
               setResult('Win')
               setTimeout(() => setScore(score + 1), 1000)
            } else {
               setResult('Lose')
               setTimeout(() => setScore(0), 1000)
            }
            break;
      }
   }

   useEffect(() => {
      if (!game.isSelected) {
         updateMachineGame()
      }
      getResult()
   }, [game])


   return (
      <Content>
         <Score score={score} />

         {game.isSelected
            ? (<ResultPage
               machineGame={machineGame}
               selectedGame={game}
               setNewGame={setNewGame}
               score={score}
               setScore={setScore}
               result={result}
               getResult={getResult}
               updateMachineGame={updateMachineGame}
            />)
            : (<SelectGamePage setNewGame={setNewGame} />)
         }

         <Rules showRule={showRule} setShowRule={setShowRule}/>

      </Content>
   )
}

export default App
