import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";

import { useRecoilState, useRecoilValue } from "recoil";
import { Outlet } from "react-router-dom";

import { themeMode } from "./recoil/theme.jsx";
import { windowSize } from "./recoil/windowSize.jsx";

import { day, night } from "./style/theme.js";
import "./style/fontStyle.css";
import { useEffect } from "react";
import { getEmSize } from "./utils/getEmSize.jsx";

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

  // window의 너비가 바뀔때마다 emSize를 재정의함
  const setEmSize = useRecoilState(windowSize);
  useEffect(() => {
    const resizeListener = () => {
      setEmSize(getEmSize(window.innerWidth));
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

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
