import React from "react";

import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { heightSize } from "../../../../recoil/heightSize";
import { theme } from "../../../../recoil/theme";

const FixViewWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  padding: 0px 16px;
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
