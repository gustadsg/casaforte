import React from "react";
import { Button } from "../UI";
import { Container, Title, Text, Section } from "./styles";

export default function CustomerCard({ name, cpf, birth, spouse, ...rest }) {
  return (
    <Container {...rest}>
      <Section>
        <Title>Rodrigo da Silva Gomes</Title>
        <Text>CPF: 111.111.111-11</Text>
        <Text>Nasimento: 21/01/2002</Text>
        <Text>Cônjuge: Fulana da silva andrade</Text>
      </Section>
      <Section>
        <Button>Detalhes</Button>
      </Section>
    </Container>
  );
}
