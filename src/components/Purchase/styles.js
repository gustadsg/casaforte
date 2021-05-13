import styled from "styled-components/macro";

export const Wrapper = styled.div`
  border: ${({ theme }) => `1px solid ${theme.grey}`};
  border-radius: 5px;
  padding: 30px;
  margin: 40px 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.p`
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.grey};
  font-size: 18px;
  margin-right: 25px;
`;

export const Description = styled.div`
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme, color }) => (color ? color : theme.grey)};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ParcelsContainer = styled.div`
  margin-top: 20px;
`;
