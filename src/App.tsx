import React from "react";
import { GlobalStyle } from "./styles/globalStyle";
import { AppRouter } from "./routes";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};
