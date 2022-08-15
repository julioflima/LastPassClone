import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import "./animations/fade.scss";
import GlobalStyle from "./globals";
import { theme } from "./theme";

const Theme: FC<{ children: ReactNode }> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default Theme;
