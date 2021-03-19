import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        // Pallet Colors
        --type-gold-decoration: #C09863;
        --type-green-background: #033D3E;
        --type-white-text: #FEFEFE;
        --type-gray-contrast-background: #EFEFEF;
    }

    *{
        padding: 0;
        margin: 0;

        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        height: 100vh;

        color: black;
        background-color: #033D3E;
        background-size: 100%;
    }

    textarea, input, button {
        font-family: Arial, Helvetica, sans-serif;
    }

    a {
        color: var(--type-white-text);
        text-decoration: none;
    }

`;