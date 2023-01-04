import { useEffect, useState } from 'react'
import { ResultPage } from './pages/ResultPage'
import { SelectGamePage } from './pages/SelectPage'
import { Score } from './components/Score'
import styled, { css } from 'styled-components'


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
   const [machineGameImg, setMachineGameImg] = useState()
   const [result, setResult] = useState('')

   function getResult(machineGame) {
      switch (game.value) {

         case 'Scissors':
            if (machineGame === 'Scissors') {
               setResult('Empate')

            } else if (machineGame === 'Paper' || machineGame === 'Lizard') {
               setResult('Win')
               setScore(score + 1)
            } else {
               setResult('Lose')
               setScore(0)
            }
            break;



         case 'Paper':
            if (machineGame === 'Paper') {
               setResult('Empate')
            } else if (machineGame === 'Rock' || machineGame === 'Spock') {
               setResult('Win')
               setScore(score + 1)
            } else {
               setResult('Lose')
               setScore(0)
            }
            break;


         case 'Rock':
            if (machineGame === 'Rock') {
               setResult('Empate')
            } else if (machineGame === 'Scissors' || machineGame === 'Lizard') {
               setResult('Win')
               setScore(score + 1)
            } else {
               setResult('Lose')
               setScore(0)
            }
            break;

         case 'Lizard':
            if (machineGame === 'Lizard') {
               setResult('Empate')
            } else if (machineGame === 'Paper' || machineGame === 'Spock') {
               setResult('Win')
               setScore(score + 1)
            } else {
               setResult('Lose')
               setScore(0)
            }
            break;


         case 'Spock':
            if (machineGame === 'Spock') {
               setResult('Empate')
            } else if (machineGame === 'Scissors' || machineGame === 'Rock') {
               setResult('Win')
               setScore(score + 1)
            } else {
               setResult('Lose')
               setScore(0)
            }
            break;
      }
   }

   function generateRandomGame() {
      const games = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock']
      const randomNumber = Math.floor(Math.random() * (games.length - 0) + 0)
      return games[randomNumber]
   }

   function updateMachineGameImg(machineGame) {
      switch (machineGame) {

         case 'Scissors':
            setMachineGameImg(scissors)
            break;

         case 'Paper':
            setMachineGameImg(paper)
            break;

         case 'Rock':
            setMachineGameImg(rock)
            break;

         case 'Lizard':
            setMachineGameImg(lizard)
            break;

         case 'Spock':
            setMachineGameImg(spock)
            break;
      }
   }


   useEffect(() => {

      if (game.isSelected) {
         
         const machineGame = generateRandomGame()
         updateMachineGameImg(machineGame)
         getResult(machineGame)
         
      }

   }, [game])



   return (
      <Content>
         <Score score={score} />

         {game.isSelected
            ? (<ResultPage selectedGame={game}  setNewGame={setNewGame} score={score} machineGameImg={machineGameImg} result={result} />)
            : (<SelectGamePage setNewGame={setNewGame} />)
         }

      </Content>
   )
}

export default App
