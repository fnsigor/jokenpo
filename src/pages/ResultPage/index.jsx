import styled, { css } from 'styled-components'
import { Game } from '../../components/Game'
import React, { useState, useEffect } from 'react';

import rock from '../../assets/games/icon-rock.svg'
import paper from '../../assets/games/icon-paper.svg'
import scissors from '../../assets/games/icon-scissors.svg'
import lizard from '../../assets/games/icon-lizard.svg'
import spock from '../../assets/games/icon-spock.svg'


const Content = styled.div`

    flex-grow: 1;
    position: relative;
    gap: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

`

const Button = styled.button`
    padding: 15px 35px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin-inline: auto;

    &:hover{
        cursor: pointer;
    }
`

const P = styled.p`
    text-align: center;
    font-size:60px;
    letter-spacing: 1px;
    margin-bottom: 10px;
`

const GameDiv = styled.div`
    border: 1px solid red;


    *{
        margin-inline: auto;
        position: relative
    }

    p{
        text-align: center;
        font-size: 25px;
        margin-bottom: 40px;
    }
`


export function ResultPage({ selectedGame, setNewGame, setScore, score }) {

    const [machineGameImg, setMachineGameImg] = useState()
    const [result, setResult] = useState('')

    function generateRandomGame() {
        const games = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock']
        const randomNumber = Math.floor(Math.random() * (games.length - 0) + 0)
        return games[randomNumber]
    }

    function updateMachineGameImg(machineGame) {
        switch (machineGame) {

            case 'Scissors':
                return scissors
                break;

            case 'Paper':
                return paper
                break;

            case 'Rock':
                return rock
                break;

            case 'Lizard':
                return lizard
                break;

            case 'Spock':
                return spock
                break;
        }
    }

    function getResult(machineGame) {
        switch (selectedGame.value) {
  
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




    useEffect(() => {
        const machineGame = generateRandomGame()
        setMachineGameImg(updateMachineGameImg(machineGame))
        getResult(machineGame)
    }, [])


    return (
        <Content>
            <GameDiv>
                <p>You picked</p>
                <Game img={selectedGame.img} />
            </GameDiv>
            <div>
                <P>{result}</P>
                <Button onClick={() => setNewGame({ isSelected: false })}>Play Again</Button>
            </div>
            <GameDiv>
                <p>The House picked</p>
                <Game img={machineGameImg} />
            </GameDiv>
        </Content>
    )

}




