import styled, { css } from 'styled-components'
import { Game } from '../../components/Game'
import React, { useState, useEffect } from 'react';

import {Result} from '../../components/Result'


const Content = styled.div`

    flex-grow: 1;
    position: relative;
    gap: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

`

const GameDiv = styled.div`
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

export function ResultPage({ selectedGame, setNewGame, result, machineGame }) {


    const [machineGameImg, setMachineGameImg] = useState(undefined)
    const [visible, setVisibility] = useState(false)


    useEffect(() => {
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
           {visible && (<Result result={result} setNewGame={setNewGame}/>)}
            <GameDiv>
                <p>The House picked</p>
                <Game img={machineGameImg} visible={visible} value={machineGame.value} />
            </GameDiv>
        </Content>
    )

}




