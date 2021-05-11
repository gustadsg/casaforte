import React from "react";
import loading from "../../assets/loading.svg";
import { Spinner, Wrapper } from "./styles";

export default function Loading() {
  return (
    <Wrapper>
      <Spinner src={loading} width={30} />
    </Wrapper>
  );
}
