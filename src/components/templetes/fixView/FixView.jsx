import React from "react";

import ButtonSetting from "../../organisms/buttonSetting/ButtonSetting";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { heightSize } from "../../../recoil/heightSize";

const FixViewWrapper = styled.div`
  width: 100%;
  background-color: red;

  padding: 0px 16px;
  min-height: ${props => props.$heightSize}px;
`;

function FixView() {
  const heightSizeValue = useRecoilValue(heightSize);

  return (
    <FixViewWrapper $heightSize={heightSizeValue}>
      <ButtonSetting />
    </FixViewWrapper>
  );
}

export default FixView;
