import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }
    
    html, body, #app {
        width: 100%;
        height: 100%;
    }
`;
