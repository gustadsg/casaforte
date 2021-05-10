import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI";
import { Container, Title, Text, Section } from "./styles";

export default function CustomerCard({
  name,
  cpf,
  birth,
  spouse,
  id,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Section>
        <Title>{name}</Title>
        <Text>CPF: {cpf}</Text>
        <Text>Nasimento: {birth}</Text>
        <Text>Cônjuge: {spouse}</Text>
      </Section>
      <Section>
        <Button as={Link} to="/teste">
          Detalhes
        </Button>
      </Section>
    </Container>
  );
}
