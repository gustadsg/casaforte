import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Description, Info, Header, Wrapper, Section, Content } from "./styles";

import arrow from "../../assets/arrow.svg";
import { Icon } from "../UI";

export default function Parcel({ parcel }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [year, month, day] = parcel?.deadline?.split("-");

  function toggleOpen() {
    setOpen((isOpen) => !isOpen);
  }

  function getColor(status) {
    switch (status) {
      case "Pago":
        return theme.success;
      case "A receber":
        return theme.warning;
      case "Atrasado":
        return theme.danger;
      default:
        return theme.grey;
    }
  }

  return (
    <Wrapper>
      <Header>
        <Section>
          <Info>
            {new Date(`${month}/${day}/${year}`).toLocaleDateString("pt-BR")}
          </Info>
          <Info>R$ {parcel?.value}</Info>
          <Info color={() => getColor(getStatus(parcel))}>
            {getStatus(parcel)}
          </Info>
        </Section>
        <Section rotate={(!open && 180) || 0}>
          <Icon
            src={arrow}
            alt="mostrar ou esconder detalhes"
            size="20px"
            style={{ cursor: "pointer" }}
            onClick={toggleOpen}
          />
        </Section>
      </Header>
      <Content display={open}>
        <Description>{parcel?.observations}</Description>
      </Content>
    </Wrapper>
  );
}

function getStatus(parcel) {
  if (parcel.isPayed) return "Pago";
  if (new Date() > new Date(parcel.deadline)) {
    return "Atrasado";
  }
  return "A receber";
}
