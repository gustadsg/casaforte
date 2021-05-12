import styled from "styled-components";
import { ReferenceCard } from "../../components";

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

export const CardsContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;

  padding: 20px 40px 20px 20px;
`;

export const SReferenceCard = styled(ReferenceCard)`
  margin-right: 20px;
`;
