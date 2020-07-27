import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import Store from "./redux/store";

const store = Store();

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
