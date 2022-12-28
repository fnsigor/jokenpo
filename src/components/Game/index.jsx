import styled, { css } from 'styled-components'

const Content = styled.img``



export function Game ({img}, {value}){
return(
    <Content src={img} title={value}/>
)
}