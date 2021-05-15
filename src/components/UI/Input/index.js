import React from "react";
import styled from "styled-components";
import { Icon } from "..";

export default function Input({
  suffix,
  width,
  value,
  onChange,
  label,
  margin,
  required,
  ...rest
}) {
  return (
    <Label margin={margin}>
      {label}
      {required && <Input.Required> *</Input.Required>}
      <Input.Wrapper width={width}>
        <Input.Input onChange={onChange} value={value} {...rest} />
        {suffix && (
          <Icon src={suffix} size="16px" style={{ marginRight: 10 }} />
        )}
      </Input.Wrapper>
    </Label>
  );
}

const Label = styled.label`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.bold};
`;

Input.Wrapper = styled.div`
  border: ${({ theme }) => `solid 2px ${theme.grey}`};
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "220px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;

  input:focus + & {
    border: ${({ theme }) => `solid 1px ${theme.primary}`};
    height: 100%;
  }
`;

Input.Input = styled.input`
  border: none;
  width: 100%;
  padding: 5px;
  margin-right: 5px;
  cursor: ${({ disabled }) => disabled && "not-allowed"};

  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

Input.Required = styled.span`
  color: red;
`;
