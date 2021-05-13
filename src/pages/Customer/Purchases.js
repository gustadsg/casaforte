import React from "react";
import { Wrapper } from "./styles";
import { PageSubtitle, Purchase } from "../../components";

export default function Purchases({ purchases }) {
  return (
    <Wrapper>
      <PageSubtitle>Compras</PageSubtitle>
      {purchases?.map((purchase) => (
        <Purchase purchase={purchase} />
      ))}
    </Wrapper>
  );
}
