import React from "react";
import { Wrapper, Section, Picture, Item } from "./styles";

import remove from "../../assets/remove.svg";

export default function Navbar() {
  return (
    <Wrapper>
      <Section>
        <Picture src={remove} alt="perfil" />
      </Section>
      <Section as="nav">
        <Item to="/">Clientes</Item>
        <Item to="/contas">Contas a receber</Item>
      </Section>
    </Wrapper>
  );
}
