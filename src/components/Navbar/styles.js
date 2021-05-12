import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.dark};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 5%;
`;

export const Section = styled.div`
  width: auto;
`;

export const Picture = styled.img`
  width: 60px;
  height: 60px;
  background-size: cover;
`;

export const Item = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
