import styled, { css } from 'styled-components'

const Content = styled.div`

    position: absolute;

    background-color: #f2f2f2;
   
    border-radius: 50%;
    height: 16rem;
    width: 16rem;
    border: 2rem solid red;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }
`


export function Game({ img, value, setNewGame }) {
    return (
        <Content onClick={ () => setNewGame(value) }>
            <img src={img} title={value} />
        </Content>
    )
}