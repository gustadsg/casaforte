import styled from "styled-components/macro";

export const Container = styled.div`
  border-radius: 5px;
  border: ${({ theme }) => `1px ${theme.grey} solid`};
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const Section = styled.div``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.bold};
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey};
`;
