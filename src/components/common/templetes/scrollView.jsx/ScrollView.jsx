import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { theme } from "../../../../recoil/theme";

const ScrollViewWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  min-height: ${props => props.$heightSize}px;

  background-size: cover;
  background-image: ${props => `url(/img/fixBg/${props.$theme}.png)`};
`;

function ScrollView({ children }) {
  const themeValue = useRecoilValue(theme);

  return <ScrollViewWrapper $theme={themeValue}>{children}</ScrollViewWrapper>;
}

export default ScrollView;
