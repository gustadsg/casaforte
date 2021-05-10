import styled from "styled-components/macro";

const Icon = styled.img`
  width: ${({ size }) => (size ? size : "30px")};
  height: ${({ size }) => (size ? size : "30px")};
  border-radius: 30px;
`;

export default Icon;
