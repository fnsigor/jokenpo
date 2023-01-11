import styled, { css } from 'styled-components'
import React, { useState, useEffect } from 'react';
import desktopRules from '../../assets/rules/desktop.png'

const Button = styled.button`
    color: #F2F2F2;
    padding: 10px 25px;
    position: absolute;
    background-color: transparent;
    border: 1px solid #f2f2f2;
    border-radius:5px;
    font-size: 16px;
    bottom: 20px;
    right:30px;
    font-weight: 700;
    transition: .1s;

    &:hover{
        cursor: pointer;
        background-color: #f2f2f2;
        color: var(--Score-Text);
    }


    @media (max-width: 1000px) {
        position: initial;
        width: min-content;
        margin: 20px auto;
    }
`

const Images = styled.div`
    position: absolute;
    background-color: #00000073;
    height: 100vh;
    width: 100vw;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .img{
        height: 40rem;
        width: 40rem;
        background-image: url(${desktopRules});
        background-repeat: no-repeat;
        background-size: contain;
    }

    ${({ showRule }) => showRule === true && css`
        display: flex;
    `}

    @media (max-width: 1000px) {
        background-color: #FFF;

        .img{
            height: 32rem;
            width: 32rem;
        }

        ${({ showRule }) => showRule === true && css`
            display: flex;
           
        `}




    }
    
`

const ImagesContent = styled.div`

    display: flex;
    padding-top:5px;
    justify-content: space-between;
    padding-inline: 15px;

    P{
        color: var(--Score-Text);
        font-size: 2.5rem;
        font-weight: 600;
    }

    button{
            background: none;
            border:none;
            font-size:2.5rem;
            font-weight: bold;
            font-family: monospace;
            color: gray;
            text-transform: uppercase;
            text-align:end;
            height: min-content;


            &:hover{
                cursor: pointer;
            }
        }

    *{
        display: block
    }

    @media (max-width: 1000px) {
        p{
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
        }

        button{
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 25px;
        }
       
    }

   
        

`

export function Rules({ showRule, setShowRule }) {


    return (
        <>
            <Images className='images' showRule={showRule}>0
                <ImagesContent className='img'>
                    <p>Rules</p>
                    <button onClick={() => setShowRule(false)} title='Close'>X</button>
                </ImagesContent>
            </Images>

            <Button onClick={() => setShowRule(true)} >Rules</Button>
        </>
    )
}