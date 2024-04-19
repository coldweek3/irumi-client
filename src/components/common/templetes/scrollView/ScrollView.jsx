import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { theme } from "../../../../recoil/theme";

const ScrollViewWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  min-height: ${props => props.$heightSize}px;

  background-size: 100% auto; /* 가로는 태그 크기에 맞추고 세로는 100%로 설정 */
  background-repeat: repeat-y; /* 세로로만 이미지 반복 */

  background-image: ${props => `url(/img/scrollBg/${props.$theme}.png)`};
`;

function ScrollView({ children }) {
  const themeValue = useRecoilValue(theme);

  return <ScrollViewWrapper $theme={themeValue}>{children}</ScrollViewWrapper>;
}

export default ScrollView;
