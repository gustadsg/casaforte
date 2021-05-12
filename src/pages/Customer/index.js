import React, { useEffect, useState } from "react";
import { PageTitle } from "../../components";
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
    </Wrapper>
  );
}
