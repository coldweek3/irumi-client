import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Draggable from "react-draggable";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const LampHeadImg = styled.img`
  position: absolute;
  width: 210px;
  height: 303px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LampPaperImg = styled.img`
  position: absolute;
  width: 147.71px;
  height: 244.72px;
  top: 43%;
  left: 7%;
  transform: translateX(-50%);
  cursor: grab;
`;

const HandCursorImg = styled.img`
  position: absolute;
  width: 80px;
  height: 89px;
  left: 65%;
  top: 70%;
  transform: translate(-50%, -50%);
`;

const GuideLineImg = styled.img`
  position: absolute;
  width: 20px;
  height: 100px;
  top: 40%;
  left: 28%;
  transform: translateX(-50%);
`;

function FlyLampPage() {
  const { backgroundImageUrl } = GradientBackground();
  const [isDragMode, setIsDragMode] = useState(true);
  const [paperPosition, setPaperPosition] = useState({ x: 100, y: 100 }); // 초기 위치 설정

  const trackPos = (e, data) => {
    if (data.x < 20 && data.x > -20 && data.y > -105 && data.y < -85) {
      setIsDragMode(false);
    }
    if (isDragMode) {
      setPaperPosition({ x: data.x, y: data.y });
    }
  };

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <div>
        <LampHeadImg src="/img/Lamp/lamp_head.png" />
        <Draggable
          onDrag={trackPos}
          position={{ x: paperPosition.x, y: paperPosition.y }}
        >
          <LampPaperImg src="/img/Lamp/lamp_paper.png" />
        </Draggable>
        <HandCursorImg src="/img/Lamp/hand.png" />
        <GuideLineImg src="/img/Lamp/line.png" />
      </div>
    </Background>
  );
}

export default FlyLampPage;
