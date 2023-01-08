import styled, { css } from 'styled-components'

const Content = styled.p`
    text-align: center;
    font-size:60px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    opacity: 1;
    transition: .1s;

    ${({ visible }) => visible === false && css`opacity: 0;` }
`

export function Result({ content, visible }) {

    return (
        <Content visible={visible}>{content}</Content>
    )
}