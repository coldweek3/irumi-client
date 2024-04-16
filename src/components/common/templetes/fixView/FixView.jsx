import React from "react";

import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { heightSize } from "../../../../recoil/heightSize";
import { theme } from "../../../../recoil/theme";

// 더이상 스크롤이 될 일이 없는 컴포넌트를 가정하고 만듦.
const FixViewWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;

  min-height: ${props => props.$heightSize}px;

  background-size: cover;
  background-image: ${props => `url(/img/fixBg/${props.$theme}.png)`};
`;

function FixView({ children }) {
  const themeValue = useRecoilValue(theme);
  const heightSizeValue = useRecoilValue(heightSize);

  return (
    <FixViewWrapper $theme={themeValue} $heightSize={heightSizeValue}>
      {children}
    </FixViewWrapper>
  );
}

export default FixView;
