import React, { useState } from "react";
import { Button, Input, Loading, PageTitle, TextArea } from "../../components";
import { Centered, Divided, Section, SPageIndex } from "./styles";
import api from "../../services/api";

export default function WorkAddress({ current, total, setCurrent, customer }) {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState([]);

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(e.target.name, ":", e.target.value);
  }

  function handleClick() {
    const data = { ...inputs, customer_id: customer.id };

    setLoading(true);
    api
      .post("/customer/work_address", data)
      .then(() => {
        setCurrent(current + 1);
      })
      .catch((error) =>
        alert(
          error?.response?.data?.message ||
            "Não foi possível adicionar endereço pessoal a usuário"
        )
      )
      .finally(() => setLoading(false));
  }

  return (
    <div>
      {loading && <Loading />}
      <PageTitle>Endereço de Trabalho</PageTitle>
      <Divided>
        <Section>
          {letfSide.map((input) => (
            <Input
              name={input.name}
              label={input.label}
              onChange={handleChange}
              required={input["required"]}
              width="80%"
            />
          ))}
        </Section>
        <Section>
          {rightSide.map((input) => (
            <Input
              name={input.name}
              label={input.label}
              onChange={handleChange}
              required={input["required"]}
              width="80%"
            />
          ))}
        </Section>
      </Divided>

      <Centered>
        <Button onClick={handleClick}>Próxima etapa</Button>
        <SPageIndex total={total} current={current + 1} />
      </Centered>
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
    name: "Country",
  },
  {
    label: "cidade",
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
