import styled from "styled-components/macro";

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 16px;
  border-radius: 5px;
`;

export default Button;
