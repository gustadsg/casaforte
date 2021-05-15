import React from "react";
import styled from "styled-components";
import { Icon } from "..";

export default function Select({
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
      {required && <Select.Required> *</Select.Required>}
      <Select.Wrapper width={width}>
        <Select.Select onChange={onChange} value={value} {...rest} />
        {suffix && (
          <Icon src={suffix} size="16px" style={{ marginRight: 10 }} />
        )}
      </Select.Wrapper>
    </Label>
  );
}

const Label = styled.label`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.bold};
`;

Select.Wrapper = styled.div`
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

Select.Select = styled.select`
  border: none;
  width: 100%;
  padding: 5px;
  margin-right: 5px;
  background-color: white;

  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

Select.Required = styled.span`
  color: red;
`;
