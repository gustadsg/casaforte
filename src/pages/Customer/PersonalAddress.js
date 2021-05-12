import React, { useState } from "react";
import { message } from "antd";
import { Input, PageSubtitle, Loading } from "../../components";
import { Divided, Section } from "./styles";
import api from "../../services/api";
import Select from "../../components/UI/Select";

export default function PersonalAddress({ setCustomer, customer }) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    api
      .post("/customer", customer)
      .then((response) => {
        setCustomer(response.data.result);
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

  console.log(customer);
  return (
    <div>
      {loading && <Loading />}
      <PageSubtitle>Endereço Pessoal</PageSubtitle>
      <Divided>
        <Section>
          {letfSide.map((input) =>
            input["type"] === "select" ? (
              <Select
                required={input["required"]}
                name={input?.name}
                label={input?.label}
                width="80%"
                value={customer[input?.name]}
                disabled
              >
                {input["options"]?.map((opt) => (
                  <option value={opt.value}>{opt.title}</option>
                ))}
              </Select>
            ) : (
              <Input
                required={input["required"]}
                name={input?.name}
                label={input?.label}
                width="80%"
                value={customer["address"][input.name]}
                type={input["type"]}
                disabled
              />
            )
          )}
        </Section>
        <Section>
          {rightSide.map((input) => (
            <Input
              required={input["required"]}
              name={input?.name}
              label={input?.label}
              width="80%"
              value={customer["address"][input.name]}
              type={input["type"]}
              disabled
            />
          ))}
        </Section>
      </Divided>
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
