import styled, { css } from 'styled-components'

const P = styled.p`
    text-align: center;
    font-size:6rem;
    letter-spacing: 1px;
    margin-bottom: 10px;
    opacity: 1;
    transition: .1s;

    ${({ visible }) => visible === false && css`opacity: 0;`}


    @media (max-width:1000px) {
        font-size:7rem;
    }
`

const Button = styled.button`
    padding: 1.5rem 3.5rem;
    border-radius: 10px;
    border: none;
    font-size: 2rem;
    font-weight: bold;
    display: block;
    margin-inline: auto;

    &:hover{
        cursor: pointer;
    }


    @media (max-width:1000px) {
        width: 80%;
        max-width: 35rem;

        padding: 1rem 2rem;
        font-size: 1.8rem;
    }
`

const Content = styled.div`
    transition: .1s;
    opacity: 1;

    ${({ visible }) => visible === false && css`
           opacity: 0;
    ` }
`

export function Result({ result, setNewGame, visible }) {

    return (
        <Content visible={visible}>
            <P>{result}</P>
            <Button onClick={() => setNewGame({ isSelected: false })}>Play Again</Button>
        </Content>
    )
}