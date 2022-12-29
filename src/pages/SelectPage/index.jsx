import styled, { css } from 'styled-components'

import BGpentagon from '../../assets/backgrounds/bg-pentagon.svg'

import rock from '../../assets/games/icon-rock.svg'
import paper from '../../assets/games/icon-paper.svg'
import scissors from '../../assets/games/icon-scissors.svg'
import lizard from '../../assets/games/icon-lizard.svg'
import spock from '../../assets/games/icon-spock.svg'


import { Game } from '../../components/Game'

export const Content = styled.main`


    position: relative;
    height: 75vh;
    background: url(${BGpentagon}) no-repeat center;
    background-size: contain;
    padding-block: 10rem;
    background-origin: content-box;

 
     div:nth-of-type(1){
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        border-color: #ecaa23;
    }

    div:nth-of-type(2){
        top: 30%;
        right: 30%;
        transform: translateX(-50%);
        border-color: #5574f7;
    }

    div:nth-of-type(3){
        top: 72%;
        right: 34%;
        transform: translateX(-50%);
        border-color: #dd405a;
    }

    div:nth-of-type(4){
        top: 72%;
        left: 42%;
        transform: translateX(-50%);
        border-color: #8c5de5;
    }

    div:nth-of-type(5){
        top: 30%;
        left: 38%;
        transform: translateX(-50%);
        border-color: #58bbd2;
    }

    

    
`



export function Select({ setNewGame }) {


    return (
        <Content>
            <Game img={scissors} value='Scissors' className='Scissors' setNewGame={setNewGame} />
            <Game img={paper} value='Paper' className='Paper' setNewGame={setNewGame} />
            <Game img={rock} value='Rock' className='Rock' setNewGame={setNewGame} />
            <Game img={lizard} value='Lizard' className='Lizard' setNewGame={setNewGame} />
            <Game img={spock} value='Spock' className='Spock' setNewGame={setNewGame} />
        </Content>
    )
}