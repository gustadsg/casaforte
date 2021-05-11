import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Customers, NewCustomer } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Customers} path="/" />
        <Route exact component={NewCustomer} path="/customer/register" />
      </Switch>
    </BrowserRouter>
  );
}
