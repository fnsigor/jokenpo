import styled, { css } from 'styled-components'
import { Game } from '../../components/Game'
import React, { useState, useEffect } from 'react';




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

export function ResultPage({ selectedGame, machineGameImg, setNewGame, result }) {


   
    

    // useEffect(()=>{
    //     alert('pagina de resultado')
    // },[])

    return (
        <Content>
            <Game img={selectedGame.img} />
            <div>
                <P>{result}</P>
                <Button onClick={() => setNewGame({ isSelected: false })}>Play Again</Button>
            </div>
            <Game img={machineGameImg} />
        </Content>
    )

}




