import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalAddress from "./PersonalAddress";

export default function NewCustomer() {
  const [current, setCurrent] = useState(0);
  const [customer, setCustomer] = useState({});
  const pages = [
    <PersonalInfo
      key={0}
      setCustomer={setCustomer}
      setCurrent={setCurrent}
      current={current}
      total={4}
    />,
    <PersonalAddress
      key={1}
      setCurrent={setCurrent}
      current={current}
      total={4}
    />,
  ];

  return pages.map((page, index) => (index === current ? page : null));
}
