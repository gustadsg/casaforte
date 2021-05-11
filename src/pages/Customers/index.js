import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { message } from "antd";
import api from "../../services/api";

import {
  CustomerCard,
  Icon,
  Input,
  Loading,
  PageTitle,
} from "../../components";
import { Body, CardsContainer, Header, Section } from "./styles";

import plus from "../../assets/plus.svg";
import mag_glass from "../../assets/magnifying-glass.svg";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <Link to="/customer/register">
          <SIcon src={plus} alt="Criar novo cliente" />
        </Link>
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
const SIcon = styled(Icon)`
  cursor: pointer;
`;
