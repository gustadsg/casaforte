import React from "react";
import styled from "styled-components";

export default function Input({
  suffix,
  width,
  value,
  onChange,
  label,
  margin,
  ...rest
}) {
  return (
    <Label margin={margin}>
      {label}
      <Input.Wrapper width={width}>
        <Input.TextArea onChange={onChange} value={value} {...rest} />
      </Input.Wrapper>
    </Label>
  );
}

const Label = styled.label`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.bold};
`;

Input.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;

  input:focus + & {
    border: ${({ theme }) => `solid 1px ${theme.primary}`};
    height: 100%;
  }
`;

Input.TextArea = styled.textarea`
  border: ${({ theme }) => `solid 2px ${theme.grey}`};
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "220px")};
  width: 100%;
  min-height: 50px;
  padding: 5px;
  margin-right: 5px;

  &:active {
    border: ${({ theme }) => `solid 2px ${theme.grey}`};
    outline: none;
  }
  &:focus {
    border: ${({ theme }) => `solid 2px ${theme.grey}`};
    outline: none;
  }
`;
