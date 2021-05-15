import styled from "styled-components/macro";

export const Wrapper = styled.div``;

export const Divided = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  right: 0;

  & > label {
    margin-top: 20px;
  }
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 0 0;
`;
