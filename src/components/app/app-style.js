import styled, { createGlobalStyle } from "styled-components";
import { standardFont } from "utils/const-style";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;

    clip: rect(0 0 0 0);
  }
`;

const AppContainer = styled.div`
  display: flex;
  margin: 100px 0;
  width: 100%;

  ${standardFont}
`;

export { GlobalStyle, AppContainer };
