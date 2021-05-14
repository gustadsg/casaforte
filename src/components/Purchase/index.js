import React from "react";
import { useTheme } from "styled-components";
import { Parcel } from "../../components";
import { Wrapper, Info, Header, Description, ParcelsContainer } from "./styles";

export default function Purchase({ purchase, ...rest }) {
  const theme = useTheme();
  const [year, month, day] = purchase?.createdAt?.split("-");

  return (
    <Wrapper {...rest}>
      <Header>
        <Info>
          {new Date(`${month}/${day}/${year}`).toLocaleDateString("pt-BR")}
        </Info>
        <Info>R$ {purchase?.value}</Info>
        <Info>{purchase?.purchaseMethod}</Info>
        <Info>{purchase?.numParcels} vezes</Info>
      </Header>
      <Description>{purchase?.description}</Description>
      <Description color={theme?.danger}>{purchase?.observations}</Description>
      <ParcelsContainer>
        {purchase?.parcels?.map((parcel) => (
          <Parcel parcel={parcel} />
        ))}
      </ParcelsContainer>
    </Wrapper>
  );
}
