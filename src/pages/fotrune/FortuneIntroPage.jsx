import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useParams } from "react-router-dom";
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const FortuneTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 20px;
  top: 20%;
  color: #ffffff;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lotus = styled.img`
  display: flex;
  position: absolute;
  top: 50%;
  width: 302px;
`;

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const LotusLight = styled.img`
  flex-grow: 1;
  position: absolute;
  top: 44%;
  width: 330px;
  animation: ${fadein} 1s linear;
`;

function FortuneIntroPage() {
  const { backgroundImageUrl } = GradientBackground();

  const [isLotusLightVisible, setIsLotusLightVisible] = useState(false);
  const { detailId } = useParams();

  useEffect(() => {
    if (isLotusLightVisible) {
      setTimeout(() => {
        window.location.href = `/fortuneLeaf`;
      }, 2000);
    }
  }, [isLotusLightVisible]); // useEffect 괄호가 닫혀야 합니다.

  const handleLotusClick = () => {
    setIsLotusLightVisible(true);
  };

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <FortuneTitle>행운의 연꽃잎을 뽑아보세요</FortuneTitle>
      <ImgContainer>
        <Lotus src="/img/Fortune/lotus.png" onClick={handleLotusClick} />
        {isLotusLightVisible && (
          <LotusLight src="/img/Fortune/lightlotus.png" />
        )}
      </ImgContainer>
    </Background>
  );
}

export default FortuneIntroPage;
