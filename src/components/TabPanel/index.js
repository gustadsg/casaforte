import React, { useState } from "react";
import { Tab } from "../../components";
import { Body, Header, Wrapper } from "./styles";

export default function TabPanel({ tabs }) {
  const [current, setCurrent] = useState(1);

  let headers = [];
  if (tabs) {
    tabs = setPositions(tabs);
    headers = setHeaders(tabs);
  }

  return (
    <Wrapper>
      <Header>
        {headers?.map(({ name, position }) => (
          <Tab
            onClick={() => setCurrent(position)}
            selected={position === current}
          >
            {name}
          </Tab>
        ))}
      </Header>
      <Body>{tabs?.find((tab) => tab?.position === current)?.content()}</Body>
    </Wrapper>
  );
}

function setPositions(tabs) {
  tabs?.forEach((tab, index) => {
    if (!tab?.position) {
      let pos = index;
      while (tabs.find((tab) => tab?.position === pos)) {
        pos++;
      }
      tab.position = pos;
    }
  });
  return tabs.sort((a, b) => a.position - b.position);
}

function setHeaders(tabs) {
  const headers = tabs?.map((tab) => {
    return { name: tab?.name, position: tab.position };
  });

  return headers;
}
