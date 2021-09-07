import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  Description,
  Info,
  Header,
  Wrapper,
  Section,
  Content,
  SIcon,
} from "./styles";
import { message } from "antd";

import arrow from "../../assets/arrow.svg";
import print from "../../assets/print.svg";
import cash from "../../assets/cash.svg";
import { Icon } from "../UI";
import api from "../../services/api";

export default function Parcel({ parcel }) {
  const theme = useTheme();
  const [parcelContent, setparcelContent] = useState(parcel);
  const [open, setOpen] = useState(false);

  let [year, month, day] = parcel?.deadline?.split("-");

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

  function handleParcelPayment() {
    api
      .put(`/parcel/${parcel.id}`, { paid_at: new Date() })
      .then((response) => {
        const parcel = response.data.result;
        message.success("Pagamento registrado com sucesso");
        setparcelContent(parcel);
        [year, month, day] = parcel?.deadline?.split("-");
      })
      .catch(() => message.error("Erro ao registrar pagamento"));
  }

  return (
    <Wrapper>
      <Header>
        <Section>
          <Info>
            {new Date(`${month}/${day}/${year}`).toLocaleDateString("pt-BR")}
          </Info>
          <Info>R$ {parcel?.value}</Info>
          <Info color={() => getColor(getStatus(parcelContent))}>
            {getStatus(parcelContent)}
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
        <Description>{parcelContent?.observations}</Description>
        <SIcon
          src={print}
          alt="imprimir"
          size="30px"
          style={{ cursor: "pointer" }}
          onClick={handlePrintParcel}
        />
        <SIcon
          src={cash}
          alt="receber pagamento"
          size="30px"
          style={{ cursor: "pointer" }}
          onClick={handleParcelPayment}
        />
      </Content>
    </Wrapper>
  );
}

function getStatus(parcel) {
  if (parcel.ispaid) return "Pago";
  if (new Date() > new Date(parcel.deadline)) {
    return "Atrasado";
  }
  return "A receber";
}

function handlePrintParcel(e) {
  e.preventDefault();
  alert("essa funcionalidade ainda não está pronta");
}
