import { Route, Switch } from "react-router-dom";
import { Customer, Customers, NewCustomer } from "./pages";

export default function Routes() {
  return (
    <Switch>
      <Route exact component={Customers} path="/" />
      <Route exact component={NewCustomer} path="/cliente/cadastrar" />
      <Route exact component={Customer} path="/cliente/:id" />
    </Switch>
  );
}
