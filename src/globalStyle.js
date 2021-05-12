import { createGlobalStyle } from "styled-components";
import background from "./assets/background.svg";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  *{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.secondary};
    background-image: url(${background});
    background-attachment: scroll;
    background-size: contain;
  }
  font-family: 'Poppins', sans-serif;
`;
