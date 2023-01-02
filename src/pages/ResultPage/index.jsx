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

    > *{
        position: relative
    }
`

const Button = styled.button`
    padding: 15px 35px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin-inline: auto;
`

const P = styled.p`
    text-align: center;
    font-size:60px;
    letter-spacing: 1px;
    margin-bottom: 10px;
`

export function ResultPage({ selectedGame, setScore, setNewGame }) {

    const [result, setResult] = useState('')
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
                if (machineGame === machineGame) {
                    setResult('Empate')
                } else if (machineGame === 'Paper' || machineGame === 'Lizard') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                    setPoint(0)
                }
                break;



            case 'Paper':
                if (machineGame === machineGame) {
                    setResult('Empate')
                } else if (machineGame === 'Rock' || machineGame === 'Spock') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;


            case 'Rock':
                if (machineGame === machineGame) {
                    setResult('Empate')
                } else if (machineGame === 'Scissors' || machineGame === 'Lizard') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;

            case 'Lizard':
                if (machineGame === machineGame) {
                    setResult('Empate')
                } else if (machineGame === 'Paper' || machineGame === 'Spock') {
                    setResult('Win')
                    setPoint(currentScore => currentScore + 1)
                } else {
                    setResult('Lose')
                }
                break;


            case 'Spock':
                if (machineGame === machineGame) {
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

        updateMachineGameImg(machineGame)
        // getResult(machineGame)


    }, [selectedGame])


    return (
        <Content>
            <Game img={selectedGame.img} />
            <div>
                <P>{result}</P>
                <Button onClick={()=>setNewGame(false)}>Play Again</Button>
            </div>
            <Game img={machineGameImg} />
        </Content>
    )

}




