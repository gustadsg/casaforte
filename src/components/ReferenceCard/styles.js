import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.grey}`};
  padding: 10px;
  border-radius: 5px;
`;

export const Info = styled.div`
  margin-right: 30px;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.bold};
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.grey};
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
`;
