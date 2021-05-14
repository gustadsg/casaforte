import React, { useState } from "react";
import { message } from "antd";
import { Button, Input, PageTitle, TextArea, Loading } from "../../components";
import { Centered, Divided, Section, SPageIndex } from "./styles";
import api from "../../services/api";
import Select from "../../components/UI/Select";

export default function PersonalInfo({
  setCurrent,
  current,
  total,
  setCustomer,
}) {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    console.log(inputs);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleClick() {
    setLoading(true);
    api
      .post("/customer", inputs)
      .then((response) => {
        setCustomer(response.data.result);
        setCurrent(current + 1);
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
      <PageTitle>Informações Pessoais</PageTitle>
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
      <Section>
        <TextArea name="observation" label="Observações" width="100%" />
      </Section>
      <Centered>
        <Button onClick={handleClick}>Próxima etapa</Button>
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
