import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: transparent;
    }

    body {
        background: ${props => props.theme["base-background"]};
        -webkit-font-smoothing: antialiased;
        overflow-y: overlay;
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme["base-input"]}; 
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.blue};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme["base-label"]};
    }

    @media (max-width: 1360px) {
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 1020px) {
        html {
            font-size: 75%;
        }
    }
`