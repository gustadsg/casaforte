import React from "react";
import { Link } from "react-router-dom";
import { PageSubtitle, Purchase, Icon } from "../../components";
import { Wrapper, Divided } from "./styles";

import plus from "../../assets/plus.svg";

export default function Purchases({ purchases, id }) {
  return (
    <Wrapper>
      <Divided>
        <PageSubtitle>Compras</PageSubtitle>
        <Link to={`/compra/cadastro/?customer_id=${id}`}>
          <Icon src={plus} alt="nova compra" style={{ cursor: "pointer" }} />
        </Link>
      </Divided>
      {purchases?.map((purchase) => (
        <Purchase purchase={purchase} />
      ))}
    </Wrapper>
  );
}
