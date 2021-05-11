import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";

import { CustomerCard, Icon, Input, PageTitle } from "../../components";
import { Body, CardsContainer, Header, Section } from "./styles";

import plus from "../../assets/plus.svg";
import mag_glass from "../../assets/magnifying-glass.svg";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("/customer")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((err) => {
        message.error(
          err?.response?.data?.message ||
            "Não foi possível obter dados dos clientes"
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <Header>
        <PageTitle>Clientes</PageTitle>
        <Icon src={plus} alt="Criar novo cliente" />
      </Header>
      <Body>
        <Section>
          <Input width="330px" suffix={mag_glass} />
        </Section>

        <Section>
          <CardsContainer>
            {customers?.map((customer) => (
              <SCustomerCard
                name={customer.name}
                cpf={customer.cpf}
                birth={new Date(customer.birthdate).toLocaleDateString("pt-BR")}
                spouse={customer.spouse}
              />
            ))}
          </CardsContainer>
        </Section>
      </Body>
    </div>
  );
}

const SCustomerCard = styled(CustomerCard)`
  margin: 10px 0;
  margin-right: 20px;
`;
