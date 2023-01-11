import styled, { css } from 'styled-components'
import React, { useState, useEffect } from 'react';
import BGpentagon from '../../assets/backgrounds/bg-pentagon.svg'

import rock from '../../assets/games/icon-rock.svg'
import paper from '../../assets/games/icon-paper.svg'
import scissors from '../../assets/games/icon-scissors.svg'
import lizard from '../../assets/games/icon-lizard.svg'
import spock from '../../assets/games/icon-spock.svg'


import { Game } from '../../components/Game'

export const Content = styled.div`

    flex-grow: 1;
    display: flex;

    align-items: center;
    justify-content: center;
`

const Pentagon = styled.div`

    background: url(${BGpentagon}) no-repeat center;
    height: 50vh;
    width: 50vh;
    
    position: relative;

    background-size: contain;



    div:nth-of-type(1){
        top: -5%;
        left: 50%;
        transform: translateX(-50%);
    }

    div:nth-of-type(2){
        top: 25%;
        left: 95%;
        transform: translateX(-50%);
        border-color: #5574f7;
    }

    div:nth-of-type(3){
        top: 75%;
        left: 82%;
        transform: translateX(-50%);
    }

    div:nth-of-type(4){
        top: 75%;
        left: 18%;
        transform: translateX(-50%);
    }

    div:nth-of-type(5){
        top: 25%;
        left: 5%;
        transform: translateX(-50%);
    }

    
    @media (max-width:1000px) {
        height: 70vw;
        width: 70vw;
    }

`



export function SelectGamePage({ setNewGame }) {

    return (
        <Content>
            <Pentagon>
                <Game img={scissors} value='Scissors' className='Scissors' setNewGame={setNewGame} />
                <Game img={paper} value='Paper' className='Paper' setNewGame={setNewGame} />
                <Game img={rock} value='Rock' className='Rock' setNewGame={setNewGame} />
                <Game img={lizard} value='Lizard' className='Lizard' setNewGame={setNewGame} />
                <Game img={spock} value='Spock' className='Spock' setNewGame={setNewGame} />
            </Pentagon>
        </Content>
    )
}