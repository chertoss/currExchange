import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import store from "./redux";
import Main from "./routes/Main";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};

const GlobalStyle = createGlobalStyle`
  body,
  body * {
    font-family: "Inter", sans-serif;
  }
`;

export default App;
