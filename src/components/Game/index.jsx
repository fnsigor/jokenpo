import styled, { css } from 'styled-components'

const Content = styled.div`

    position: absolute;

    background-color: #f2f2f2;
   
    border-radius: 50%;
    height: 16rem;
    width: 16rem;
    border: 2rem solid;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .1s ease-out;

    &:hover{
        cursor: pointer;
    }

    ${({ visible }) => visible === false && css`
        border: none;
        background-color: #1a1a1aa0;
        height: 160px;
        width: 160px;

        img{
            display:none;
        }
    ` }

    ${({ value }) => value === 'Scissors' && css`
        border-color: #ecaa23;
    ` }
    ${({ value }) => value === 'Paper' && css`
        border-color: #5574f7;
    ` }
    ${({ value }) => value === 'Rock' && css`
        border-color: #dd405a;
    ` }
    ${({ value }) => value === 'Lizard' && css`
        border-color: #8c5de5;
    ` }
    ${({ value }) => value === 'Spock' && css`
        border-color: #58bbd2;
    ` }



    @media (max-width: 1400px) {
        height: 100px;
        width: 100px;
        border-width: 10px;

        img{
            height: 45px;
            width: min-content;
        }
    }

    @media (max-width: 1000px) {
        height: 14vh;
        width: 14vh;
        border-width: 1.5vh;

        img{
            height: 6vh;
            width: min-content;
        }
    }
    
`


export function Game({ img, value, setNewGame, visible }) {
    return (
        <Content onClick={() => setNewGame({ img, value, isSelected: true })} visible={visible} value={value}>
            <img src={img} title={value} />
        </Content>
    )
}