import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Customers } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Customers} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
