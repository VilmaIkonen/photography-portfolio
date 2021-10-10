import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Dancing+Script:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 6rem;
    font-weight: 700;
    color: #333;
  }

  h2 {
    font-family: 'Dancing Script', cursive;
    font-size: 4rem;
    font-weight: 500;
    color: #333;
  }

  h3 {
    font-family: 'Cutive Mono', cursive;
    font-size: 2rem;
    color: #333;
  }

  h4 {
    font-family: 'Cutive Mono', cursive;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-family: 'Cutive Mono', cursive;
    font-size: 1rem;
    color: #333
  }

  nav, ul, li {
    font-family: 'Cutive Mono', cursive;
    font-size: 1.5rem;
    color: #333
  }
`;

