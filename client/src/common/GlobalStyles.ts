import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
* {
    margin: 0 0;    
    padding:0 0;
}
body {
    height: 100%;
    width:100%;
    font-size:16px;
}
button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}
a{ 
    /* 링크의 색상 및 밑줄 없애기 */
    color: inherit;
    text-decoration: none;
}
  

`;
export default GlobalStyles;
