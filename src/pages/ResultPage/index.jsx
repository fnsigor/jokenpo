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
            <div>
                <Result content={result} visible={visible}></Result>
                <Button onClick={() =>setNewGame({ isSelected: false })}>Play Again</Button>
            </div>
            <GameDiv>
                <p>The House picked</p>
                <Game img={machineGameImg} visible={visible} value={machineGame.value} />
            </GameDiv>
        </Content>
    )

}




