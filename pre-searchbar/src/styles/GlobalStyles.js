import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: "Rubik", sans-serif;
        font-size: 12px;
        background-color: white;
        color: black;
        padding-top: 50px;
    }

    #root {
        overflow: hidden;
    }
`;

export default globalStyles;
