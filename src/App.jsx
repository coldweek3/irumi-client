import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";

import { useRecoilValue } from "recoil";
import { themeMode } from "./recoil/theme.jsx";

import { day, night } from "./style/theme.js";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  const theme = useRecoilValue(themeMode);
  return (
    <>
      <ThemeProvider theme={theme == "DAY" ? day : night}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
