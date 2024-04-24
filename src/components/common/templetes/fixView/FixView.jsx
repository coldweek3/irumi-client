// FixView.jsx
import React, { forwardRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { heightSize } from "../../../../recoil/heightSize";
import { theme } from "../../../../recoil/theme";

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

const FixView = forwardRef(({ children }, ref) => {
  const themeValue = useRecoilValue(theme);
  const heightSizeValue = useRecoilValue(heightSize);

  return (
    <FixViewWrapper $theme={themeValue} $heightSize={heightSizeValue} ref={ref}>
      {children}
    </FixViewWrapper>
  );
});

export default FixView;
