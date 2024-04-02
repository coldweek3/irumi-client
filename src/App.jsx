import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";

import { useRecoilValue } from "recoil";
import { Outlet } from "react-router-dom";

import { themeMode } from "./recoil/theme.jsx";
import { day, night } from "./style/theme.js";
import "./style/fontStyle.css";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 500px;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.font1};

  font-family: "Pretendard";
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
