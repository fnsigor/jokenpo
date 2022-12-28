import styled, { css } from 'styled-components'


export const Container = styled.div`
    border: 1px solid #fff;
    padding: 2rem 1.5rem;

    display: flex;

    justify-content: space-between;
    align-items: center;

    max-width: 85rem;
    margin-bottom: 5rem;
    margin-inline: auto;

    border-radius: 10px;
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
    )
}