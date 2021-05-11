import styled from "styled-components";
import PageIndex from "../../components/UI/PageIndex";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

export const SPageIndex = styled(PageIndex)`
  margin: 20px 0;
`;
