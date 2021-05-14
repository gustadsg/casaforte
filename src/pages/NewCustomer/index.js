import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalAddress from "./PersonalAddress";
import WorkAddress from "./WorkAddress";
import ComertialReferences from "./ComertialReferences";

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
      customer={customer}
    />,
    <WorkAddress
      key={2}
      setCurrent={setCurrent}
      current={current}
      total={4}
      customer={customer}
    />,
    <ComertialReferences
      key={3}
      setCurrent={setCurrent}
      current={current}
      total={4}
      customer={customer}
      setCustomer={setCustomer}
    />,
  ];

  return pages.map((page, index) => (index === current ? page : null));
}
