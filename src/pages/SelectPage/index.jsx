import styled, { css } from 'styled-components'

import BGpentagon from '../../assets/backgrounds/bg-pentagon.svg'

import rock from '../../assets/games/icon-rock.svg'
import paper from '../../assets/games/icon-paper.svg'
import scissors from '../../assets/games/icon-scissors.svg'
import lizard from '../../assets/games/icon-lizard.svg'
import spock from '../../assets/games/icon-spock.svg'


import { Game } from '../../components/Game'

export const Content = styled.main`

    border: 1px solid red;
    position: relative;
    

    .bg{
        display: block;
        margin-inline: auto;
        position: relative;
    }

     div:nth-of-type(1){
        
        
        left: 50%;
        transform: translateX(-50%);
    }

    div:nth-of-type(2){
     
        
        left: 65%;
        top: 25%;
        transform: translateX(-65%);
    }

    
`



export function Select() {


    return (
        <Content>
            <Game img={scissors} title='Scissors' className='Scissors' />
            <Game img={paper} title='Paper' className='Paper' />
            <Game img={rock} title='Rock' className='Rock' />
            <Game img={lizard} title='Lizard' className='Lizard' />
            <Game img={spock} title='Spock' className='Spock' />
            <img src={BGpentagon} alt="" className='bg' />
        </Content>
    )
}