import styled, { css } from 'styled-components'
import { Game } from '../../components/Game'
import React, { useState, useEffect } from 'react';

import { Result } from '../../components/Result'


const Content = styled.div`

    flex-grow: 1;
    position: relative;
    gap: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {

        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
        "user-game machine-game"
        "button-area button-area";

        >  div:nth-child(1){
            grid-area: user-game;
            display: flex;
        }
        >  div:nth-child(2){
            grid-area: button-area;
        }
        >  div:nth-child(3){
            grid-area: machine-game;
            display: flex;
        }
    }

`

const GameDiv = styled.div`
    *{
        margin-inline: auto;
        position: relative
    }

    p{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 40px;
    }

    @media(max-width:1000px){

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        *{
            margin-inline: initial;
            position: initial
        }

        
        p{
            order: 1;
            font-size: 1.8rem;
            margin: 0;
        }
    }
    
`

export function ResultPage({ selectedGame, setNewGame, result, machineGame }) {


    const [machineGameImg, setMachineGameImg] = useState(undefined)
    const [visible, setVisibility] = useState(false)
    const [windowWith, setWindowWith] = useState()

    function getWindowWith(){
        setWindowWith(window.screen.width)
    }


    useEffect(() => {
        getWindowWith()

        setTimeout(() => {
            setMachineGameImg(machineGame.img)
            setVisibility(true)
        }, 1000)
    }, [])


    return (
        <Content>
            <GameDiv>
                <p>You picked</p>
                <Game img={selectedGame.img} value={selectedGame.value} />
            </GameDiv>
            
            {(visible || windowWith <= 1000) && (<Result result={result} setNewGame={setNewGame} visible={visible} />)}
            <GameDiv>
                <p>The House picked</p>
                <Game img={machineGameImg} visible={visible} value={machineGame.value} />
            </GameDiv>
        </Content>
    )

}




