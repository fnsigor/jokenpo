import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --Scissors-Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%);
    --Paper-Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%);
    --Rock-Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%);
    --Lizard-Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%);
    --Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%);



    --Dark-Text: hsl(229, 25%, 31%);
    --Score-Text: hsl(229, 64%, 46%);
    --Header-Outline: hsl(217, 16%, 45%);


    --Radial-Gradient: hsl(214, 47%, 23%), hsl(237, 49%, 15%);

    font-size: 62.5%;
}


*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{

    padding-top: 5rem;

   background: radial-gradient(var(--Radial-Gradient)) no-repeat;
    color: #fff;

    font-family: 'Barlow Semi Condensed', sans-serif;
    min-height: 100vh;
}

`