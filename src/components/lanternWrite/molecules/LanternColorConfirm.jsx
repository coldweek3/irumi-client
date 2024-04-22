import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { clickedState } from "../../../recoil/lanternColor";

function LanternColorConfirm() {
  // 선택한 이미지의 상태를 Recoil로부터 가져옴
  const clicked = useRecoilValue(clickedState);

  // 선택된 색상 이미지 필터링하여 가져옴
  const onImages = Object.entries(clicked)
    .filter(([color, isSelected]) => isSelected)
    .map(([color]) => color);

  return (
    <LanternColorConfirmWrapper>
      {onImages.map(color => (
        <LanternImg key={color} src={`/img/Lantern/Big_${color}.png`} />
      ))}
    </LanternColorConfirmWrapper>
  );
}

export default LanternColorConfirm;

const LanternColorConfirmWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  width: 100%;
  margin-top: 3em;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const LanternImg = styled.img`
  width: 50%;
`;
