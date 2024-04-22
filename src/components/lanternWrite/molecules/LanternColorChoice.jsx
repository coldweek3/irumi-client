import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { clickedState } from "../../../recoil/lanternColor";

function LanternColor() {
  //recoil로 선택한 연등 색상 관리
  const [clicked, setClicked] = useRecoilState(clickedState);

  //클릭된 이미지만 on하고 나머지는 off가 되도록 설정
  const handleImageClick = color => {
    setClicked(prevState => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key, value]) => [
          key,
          key === color ? !value : false
        ])
      ),
      [color]: !prevState[color]
    }));
  };

  return (
    <LanternColorWrapper>
      <LanternText>연등</LanternText>
      <LanternImgContainer>
        <LanternImg
          src={`/img/Lantern/Small_${
            clicked.pink ? "on_pink" : "off_pink"
          }.png`}
          onClick={() => handleImageClick("pink")}
        />
        <LanternImg
          src={`/img/Lantern/Small_${
            clicked.yellow ? "on_yellow" : "off_yellow"
          }.png`}
          onClick={() => handleImageClick("yellow")}
        />
        <LanternImg
          src={`/img/Lantern/Small_${
            clicked.green ? "on_green" : "off_green"
          }.png`}
          onClick={() => handleImageClick("green")}
        />
        <LanternImg
          src={`/img/Lantern/Small_${
            clicked.blue ? "on_blue" : "off_blue"
          }.png`}
          onClick={() => handleImageClick("blue")}
        />
        <LanternImg
          src={`/img/Lantern/Small_${
            clicked.purple ? "on_purple" : "off_purple"
          }.png`}
          onClick={() => handleImageClick("purple")}
        />
      </LanternImgContainer>
    </LanternColorWrapper>
  );
}

export default LanternColor;

const LanternColorWrapper = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  width: 100%;
  gap: 1em;
`;

const LanternText = styled.div`
  color: white;
`;

const LanternImgContainer = styled.div`
  gap: 1em;
  display: flex;
`;

const LanternImg = styled.img`
  width: 2em;
  cursor: pointer;
`;
