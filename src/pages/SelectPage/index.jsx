import styled, { css } from 'styled-components'

import {pentagono} from '../../assets/favicon-32x32.png'


export const Content = styled.main`

background-color: red;

`



export function Select() {


    return (
        <Content>
            <img src={pentagono} alt="" />
        </Content>
    )
}