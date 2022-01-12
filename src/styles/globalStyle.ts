import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
    
    html, body, #app {
        width: 100%;
        height: 100%;
    }
`;
