import styled from "styled-components/macro";

const Tab = styled.li`
  display: inline-block;
  margin: 0;
  margin-left: 5px;
  width: auto;
  background-color: ${({ selected, theme }) => selected && theme.primary};
  padding: 10px;
  border: ${({ theme }) => `solid 1px ${theme.grey}`};
  border-color: ${({ selected, theme }) => selected && theme.primary};
  border-radius: 10px 0 0 0;
  cursor: pointer;

  color: ${({ selected, theme }) => (selected ? "white" : theme.primary)};
  font-weight: ${({ theme }) => theme.medium};
`;

export default Tab;
