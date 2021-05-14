import React, { useState } from "react";
import { message } from "antd";
import { Input, PageSubtitle, TextArea, Loading } from "../../components";
import { Divided, Section } from "./styles";
import api from "../../services/api";
import Select from "../../components/UI/Select";

export default function PersonalInfo({ setCustomer, customer }) {
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

  return (
    <div>
      {loading && <Loading />}
      <PageSubtitle>Informações Pessoais</PageSubtitle>
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
                value={customer[input?.name]}
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
              value={customer[input?.name]}
              type={input["type"]}
              disabled
            />
          ))}
        </Section>
      </Divided>
      <Section>
        <TextArea
          name="observation"
          label="Observações"
          width="100%"
          disabled
        />
      </Section>
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
    label: "CPF",
    name: "cpf",
    required: true,
  },
  {
    label: "Sexo",
    name: "sex",
    required: true,
    type: "select",
    options: [
      {
        title: "Selecione uma opção",
        value: null,
      },
      {
        title: "Masculino",
        value: "male",
      },
      {
        title: "Feminino",
        value: "female",
      },
    ],
  },
  {
    label: "Cônjuge",
    name: "spouse",
  },
  {
    label: "Pai",
    name: "father",
  },
];
const rightSide = [
  {
    label: "Email",
    name: "email",
  },
  {
    label: "RG",
    name: "rg",
  },
  {
    label: "Nascimento",
    name: "birthdate",
    type: "date",
    required: true,
  },
  {
    label: "Fone",
    name: "phone",
  },
  {
    label: "Mãe",
    name: "mother",
  },
];
