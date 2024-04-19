import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { theme } from "../../../../recoil/theme";

const ScrollViewWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  min-height: ${props => props.$heightSize}px;

  background-size: contain;
  background-repeat: repeat-y;
  background-image: ${props => `url(/img/scrollBg/${props.$theme}.png)`};
`;

function ScrollView({ children }) {
  const themeValue = useRecoilValue(theme);

  return <ScrollViewWrapper $theme={themeValue}>{children}</ScrollViewWrapper>;
}

export default ScrollView;
