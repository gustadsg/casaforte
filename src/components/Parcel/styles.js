import styled from "styled-components/macro";

export const Wrapper = styled.div`
  border: ${({ theme }) => `1px solid ${theme.grey}`};
  border-radius: 5px;
  padding: 15px;
  margin: 20px 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
`;

export const Info = styled.p`
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme, color }) => (color ? color : theme.grey)};
  font-size: 18px;
  margin-right: 25px;
`;

export const Content = styled.div`
  display: ${({ display }) => (display ? "block" : "none")};
`;

export const Description = styled.div`
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.grey};
`;
