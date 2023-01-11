import styled, { css } from 'styled-components'


export const Content = styled.div`
    padding-top: 3rem;
`

export const Container = styled.div`
    border: 1px solid #fff;
    padding: 2rem 1.5rem;

    display: flex;

    justify-content: space-between;
    align-items: center;

    max-width: 850px;
    width: 100%;

    margin-inline: auto;

    border-radius: 10px;


    @media (max-width: 1400px) {
        padding: 1rem 1rem;
        max-width: 700px;
    }


    @media (max-width: 1000px) {
        width: 80%;
        max-width: 500px
    }
`

export const GamesDiv = styled.div`

    width: fit-content;
    
    
    > *{
        
        display: block;
        font-size: 2.5rem;
    }


    @media (max-width: 1400px) {
        *{
            font-size: 1.8rem;
        }
    }

    @media (max-width: 1000px) {
        *{
            font-size: 1.4rem;
        }
    }
`

export const ScoreBox = styled.div`
    background-color: #fff;
    color: black;
    
    border-radius: 10px;
    padding: 1rem 5rem;

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


    @media (max-width: 1400px) {

        padding: 1rem 3rem;

        .title{
            font-size: 1.6rem;
        }

        .number{
            font-size: 3.5rem;
        }
    }

    @media (max-width: 1000px) {
        padding: .5rem 2rem;

        .title{
            font-size: 1.4rem;
        }

        .number{
            font-size: 2.5rem;
        }
    }

`







export function Score({ score }) {
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
                        {score}
                    </span>
                </ScoreBox>
            </Container>
        </Content>
    )
}