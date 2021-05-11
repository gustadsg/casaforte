import React from "react";
import { Button, Input, PageTitle, TextArea } from "../../components";
import { Centered, Divided, Section, SPageIndex } from "./styles";

export default function PersonalInfo({ current, total, setCurrent }) {
  return (
    <div>
      <PageTitle>Endereço Pessoal</PageTitle>
      <Divided>
        <Section>
          {letfSide.map((input) => (
            <Input name={input.name} label={input.label} width="80%" />
          ))}
        </Section>
        <Section>
          {rightSide.map((input) => (
            <Input name={input.name} label={input.label} width="80%" />
          ))}
        </Section>
      </Divided>
      <Section>
        <TextArea label="Observações" width="100%" />
      </Section>
      <Centered>
        <Button>Próxima etapa</Button>
        <SPageIndex total={total} current={current + 1} />
      </Centered>
    </div>
  );
}

const letfSide = [
  {
    label: "CEP",
    name: "cep",
  },
  {
    label: "Estado",
    name: "state",
  },
  {
    label: "Bairro",
    name: "neighbourhood",
  },
  {
    label: "Número",
    name: "number",
  },
];
const rightSide = [
  {
    label: "País",
    name: "Country",
  },
  {
    label: "cidade",
    name: "city",
  },
  {
    label: "Rua",
    name: "street",
  },
  {
    label: "Complemento",
    name: "complement",
  },
];
