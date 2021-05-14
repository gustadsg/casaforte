import React from "react";
import { Icon } from "../UI";
import { Info, Title, Wrapper, Text } from "./styles";

import remove from "../../assets/remove.svg";

export default function ReferenceCard({ name, phone, onRemove, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Info>
        <Title>{name}</Title>
        <Text>{phone}</Text>
      </Info>
      <div>
        <Icon src={remove} style={{ cursor: "pointer" }} onClick={onRemove} />
      </div>
    </Wrapper>
  );
}
