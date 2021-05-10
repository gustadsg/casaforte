import React from "react";
import styled from "styled-components";
import { Icon } from "..";

export default function Input({ suffix, width, value, onChange }) {
  return (
    <Input.Wrapper width={width}>
      <Input.Input />
      {suffix && <Icon src={suffix} size="16px" style={{ marginRight: 10 }} />}
    </Input.Wrapper>
  );
}

Input.Wrapper = styled.div`
  border: ${({ theme }) => `solid 2px ${theme.grey}`};
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "220px")};
  display: flex;
  align-items: center;
  justify-content: space-between;

  input:focus + & {
    border: ${({ theme }) => `solid 1px ${theme.primary}`};
  }
`;

Input.Input = styled.input`
  border: none;
  width: 80%;
  padding: 5px;
  margin-right: 5px;

  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
