import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Input,
  Loading,
  PageTitle,
  Select,
  TextArea,
} from "../../components";
import { Divided, Wrapper, Section, Centered } from "./styles";
import { message } from "antd";
import api from "../../services/api";

export default function Purchase({ location }) {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const [options, setOptions] = useState([]);

  const { customer_id } = location.state;

  useEffect(() => {
    if (customer_id) setInputs((inputs) => ({ ...inputs, customer_id }));
    api.get("/customer").then((response) => {
      const opt = response.data.map((customer) => ({
        title: customer.name,
        value: customer.id,
      }));

      setOptions(opt);
    });
  }, []);

  function handleChange(e) {
    if (e.target.type === "checkbox")
      return setInputs({ ...inputs, [e.target.name]: e.target.checked });
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleClick() {
    setLoading(true);
    api
      .post("/purchase/", inputs)
      .then((response) => {})
      .catch((err) =>
        message.error(
          err?.response?.data?.message || "Não foi possível criar usuário"
        )
      )
      .finally(() => {
        setLoading(false);
      });
  }

  const leftSide = [
    {
      label: "Cliente",
      name: "customer_id",
      required: true,
      type: "select",
      options,
    },
    {
      label: "Valor",
      name: "value",
      type: "number",
      required: true,
    },
    {
      label: "Pago",
      name: "is_paid",
      type: "checkbox",
      required: true,
    },
  ];
  const rightSide = [
    {
      label: "Método de pagamento",
      name: "purchase_method",
      required: true,
      type: "select",
      options: [
        {
          title: "Selecione um método de pagamento",
          value: null,
        },
        {
          title: "À vista",
          value: "À vista",
        },
        {
          title: "Credito",
          value: "Credito",
        },
        {
          title: "Parcelado",
          value: "Parcelado",
        },
      ],
    },
    {
      label: "Número de parcelas",
      name: "num_parcels",
      required: true,
    },
  ];

  return (
    <Wrapper>
      {loading && <Loading />}
      <PageTitle>Nova venda</PageTitle>
      <Divided>
        <Section>
          {leftSide.map((input) =>
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
          {rightSide.map((input) =>
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
      </Divided>
      <Section>
        <TextArea
          label="Descrição"
          name="description"
          onChange={handleChange}
          value={inputs["description"]}
        />
        <TextArea
          label="Observações"
          name="observations"
          onChange={handleChange}
          value={inputs["observations"]}
        />
      </Section>
      <Centered>
        <Button onClick={handleClick}>Concluir</Button>
      </Centered>
    </Wrapper>
  );
}
