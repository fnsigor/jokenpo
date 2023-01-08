import styled, { css } from 'styled-components'

const P = styled.p`
    text-align: center;
    font-size:60px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    opacity: 1;
    transition: .1s;

    ${({ visible }) => visible === false && css`opacity: 0;`}
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

export function Result({result, setNewGame }) {

    return (
        <div>
            <P>{result}</P>
            <Button onClick={() => setNewGame({ isSelected: false })}>Play Again</Button>
        </div>
    )
}