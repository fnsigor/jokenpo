import styled, { css } from 'styled-components'


export const Content = styled.div`
    height:  fit-content;
    min-height: 25vh;

    position: relative;
`

export const Container = styled.div`
    border: 1px solid #fff;
    padding: 2rem 1.5rem;

    display: flex;

    justify-content: space-between;
    align-items: center;

    max-width: 85rem;
    width: 100%;

    margin-inline: auto;

    border-radius: 10px;

    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
`

export const GamesDiv = styled.div`

    width: fit-content;
    
    > *{
        display: block;
        font-size: 2.5rem;
    }
`

export const ScoreBox = styled.div`
    background-color: #fff;
    color: black;
    min-width: 15rem;
    border-radius: 10px;
    padding-block: 1rem;

    > * {
        display: block;
        margin-inline: auto;
        width:fit-content;
        color: var(--Dark-Text);

    }

    .title{
        font-size: 2rem;
    }
    .number{
        font-size: 5rem;
    }

`







export function Score({ points }) {
    return (
        <Content>

            <Container>
                <GamesDiv>
                    <span>ROCK</span>
                    <span>PAPER</span>
                    <span>SCISSORS</span>
                    <span>LIZARD</span>
                    <span>SPOCK</span>
                </GamesDiv>
                <ScoreBox>
                    <span className='title'>
                        score
                    </span>
                    <span className='number'>
                        {points}
                    </span>
                </ScoreBox>
            </Container>
        </Content>
    )
}