import React from "react";
import styled from "styled-components";

export default function PageIndex({ total, current, ...rest }) {
  const list = [];
  for (let i = 0; i < total; i++) {
    list.push(i + 1);
  }
  return (
    <Wrapper {...rest}>
      {list.map((item) => (item === current ? <Circle primary /> : <Circle />))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: auto;
`;

const Circle = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 1px;
  border-radius: 50%;
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : theme.grey};
`;
