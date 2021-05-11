import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Spinner = styled.img`
  animation: 1s ease-in-out spin infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
