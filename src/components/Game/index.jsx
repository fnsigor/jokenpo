import styled, { css } from 'styled-components'

const Content = styled.div`
    position: absolute;
    background-color: red;
    padding: 2rem;
    border-radius: 50%;
`


export function Game({ img }, { value }) {
    return (
        <Content>
            <img src={img} title={value} />
        </Content>
    )
}