import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalAddress from "./PersonalAddress";
import WorkAddress from "./WorkAddress";
import Purchases from "./Purchases";
import { PageTitle, TabPanel } from "../../components";
import { Wrapper } from "./styles";
import api from "../../services/api";

export default function Customer({ match }) {
  const { id } = match.params;

  const [customer, setCustomer] = useState({});

  let tabs = [
    {
      name: "Informações Pessoais",
      position: 1,
      content: () => <PersonalInfo customer={customer} />,
    },
    {
      name: "Endereço Pessoal",
      position: 2,
      content: () => <PersonalAddress customer={customer} />,
    },
    {
      name: "Endereço de Trabalho",
      position: 3,
      content: () => <WorkAddress customer={customer} />,
    },
    {
      name: "Referências Comerciais",
      position: 4,
      content: () => "body de Referências Comerciais",
    },
    {
      name: "Compras",
      position: 5,
      content: () => <Purchases purchases={customer.purchases} />,
    },
  ];

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
