import React, { useState } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";
import { Button, Input, PageTitle, Loading, Icon } from "../../components";
import {
  CardsContainer,
  Centered,
  Divided,
  Section,
  SPageIndex,
  SReferenceCard,
} from "./styles";
import api from "../../services/api";
import Select from "../../components/UI/Select";

import plus from "../../assets/plus.svg";

export default function ComertialReferences({
  current,
  total,
  customer,
  setCustomer,
}) {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleClick() {
    const data = { ...inputs, customer_id: customer.id };
    setLoading(true);
    api
      .post("/customer/comertial_reference", data)
      .then(async (response) => {
        await api
          .get(`/customer/${customer.id}`)
          .then((res) => setCustomer(res?.data))
          .catch((err) => {
            message.error(
              err?.response?.data?.message ||
                "Não foi possível obter dados do cliente"
            );
          });
      })
      .catch((err) =>
        message.error(
          err?.response?.data?.message || "Não foi possível criar usuário"
        )
      )
      .finally(() => {
        setLoading(false);
      });
  }

  function handleRemove(id) {
    api
      .delete(`/comertial_reference/${id}`)
      .then(async () => {
        setInputs({});
        await api
          .get(`/customer/${customer.id}`)
          .then((res) => setCustomer(res?.data))
          .catch((err) => {
            message.error(
              err?.response?.data?.message ||
                "Não foi possível obter dados do cliente"
            );
          });
      })
      .catch((error) => message.error(error.response.data.message));
  }

  return (
    <div>
      {loading && <Loading />}
      <PageTitle>Referências Comerciais</PageTitle>
      <Divided>
        <Section>
          {letfSide.map((input) =>
            input["type"] === "select" ? (
              <Select
                required={input["required"]}
                name={input.name}
                label={input.label}
                width="80%"
                value={inputs[input.name]}
                onChange={handleChange}
              >
                {input["options"]?.map((opt) => (
                  <option value={opt.value}>{opt.title}</option>
                ))}
              </Select>
            ) : (
              <Input
                required={input["required"]}
                name={input.name}
                label={input.label}
                width="80%"
                value={inputs[input.name]}
                onChange={handleChange}
                type={input["type"]}
              />
            )
          )}
        </Section>
        <Section>
          {rightSide.map((input) => (
            <Input
              required={input["required"]}
              name={input.name}
              label={input.label}
              width="80%"
              value={inputs[input.name]}
              onChange={handleChange}
              type={input["type"]}
            />
          ))}
        </Section>
      </Divided>
      <Centered>
        <Icon src={plus} onClick={handleClick} style={{ cursor: "pointer" }} />
      </Centered>
      <CardsContainer>
        {customer?.comertialReferences?.map((ref) => (
          <>
            <SReferenceCard
              name={ref.name}
              phone={ref.phone}
              onRemove={() => handleRemove(ref.id)}
            />
          </>
        ))}
      </CardsContainer>
      <Centered>
        <Button as={Link} to={"/"}>
          Concluir
        </Button>
        <SPageIndex total={total} current={current + 1} />
      </Centered>
    </div>
  );
}

const letfSide = [
  {
    label: "Nome",
    name: "name",
    required: true,
  },
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
    required: true,
  },
  {
    label: "Número",
    name: "number",
    type: "number",
    required: true,
  },
];
const rightSide = [
  {
    label: "Fone",
    name: "phone",
    required: true,
  },
  {
    label: "País",
    name: "country",
  },
  {
    label: "Cidade",
    name: "city",
  },
  {
    label: "Rua",
    name: "street",
    required: true,
  },
  {
    label: "Complemento",
    name: "complement",
  },
];
