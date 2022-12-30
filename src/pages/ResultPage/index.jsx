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
    border: 1px solid red;

    display: flex;
    align-items: center;
    justify-content: center;

    > *{
        position: relative
    }
`

const Buttons = styled.div`
    border: 1px solid red;


    button{
        padding: 10px 20px;
    }
`

export function Result({ selectedGame, setPoint }) {


    const [result, setResult] = useState()
    const [machineGameImg, setMachineGameImg] = useState()
    
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


    function getResult(machineGame) {
        switch (selectedGame.value) {

            case 'Scissors':
                if (machineGame === 'Scissors') {
                    setResult('Empate')
                } else if (machineGame === 'Paper' || machineGame === 'Lizard') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;



            case 'Paper':
                if (machineGame === 'Paper') {
                    setResult('Empate')
                } else if (machineGame === 'Rock' || machineGame === 'Spock') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;


            case 'Rock':
                if (machineGame === 'Rock') {
                    setResult('Empate')
                } else if (machineGame === 'Scissors' || machineGame === 'Lizard') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;

            case 'Lizard':
                if (machineGame === 'Lizard') {
                    setResult('Empate')
                } else if (machineGame === 'Paper' || machineGame === 'Spock') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;


            case 'Spock':
                if (machineGame === 'Lizard') {
                    setResult('Empate')
                } else if (machineGame === 'Scissors' || machineGame === 'Rock') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;
        }
    }

    useEffect(() => {


        const machineGame = generateRandomGame()
        getResult(machineGame)
        updateMachineGameImg(machineGame)


       



    }, [selectedGame])


    return (
        <Content>
            <Game img={selectedGame.img} />
            <Buttons>
                <p>Empate</p>
                <button>Play Again</button>
            </Buttons>
            <Game img={machineGameImg} />
        </Content>
    )

}




