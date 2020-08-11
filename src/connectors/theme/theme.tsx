import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global-style";

import branding from "styling/branding";

const theme = (Component: any) => {
  return (props: any) => {
    return (
      <ThemeProvider theme={branding}>
        <>
          <Component {...props} />
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  };
};

export default theme;
