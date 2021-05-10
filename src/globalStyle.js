import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  *{
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.secondary}
  }
  font-family: 'Poppins', sans-serif;
`;
