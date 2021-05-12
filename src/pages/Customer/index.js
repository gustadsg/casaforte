import React, { useEffect, useState } from "react";
import { PageTitle, TabPanel } from "../../components";
import { Wrapper } from "./styles";
import api from "../../services/api";

export default function Customer({ match }) {
  const { id } = match.params;

  const [customer, setCustomer] = useState({});

  useEffect(() => {
    api.get(`/customer/${id}`).then((response) => {
      setCustomer(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <PageTitle>{customer && customer.name}</PageTitle>
      <TabPanel tabs={tabs} />
    </Wrapper>
  );
}

let tabs = [
  {
    name: "Informações Pessoais",
    position: 1,
    content: () => "body de Informações Pessoais",
  },
  {
    name: "Endereço Pessoal",
    position: 2,
    content: () => "body de Endereço Pessoal",
  },
  {
    name: "Endereço de Trabalho",
    position: 3,
    content: () => "body de Endereço de Trabalho",
  },
  {
    name: "Referências Comerciais",
    position: 4,
    content: () => "body de Referências Comerciais",
  },
];
