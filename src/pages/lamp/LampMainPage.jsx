import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";
import LampTheme from "../../components/lamp/atoms/LampTheme";
import LampBanner from "../../components/lamp/atoms/LampBanner";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
`;

const HeaderComponent = styled.div`
  @media (max-width: 470px) {
    font-size: 0.9em;
  }
`;

const ThemeBox = styled.div`
  display: flex;
  /* height: calc(100% - 250px); */
  gap: 2vw;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid; */
  margin-top: 3em;
`;

function LampMainPage() {
  const { backgroundImageUrl } = GradientBackground();

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <HeaderComponent>
        <Header
          title="더 오래 간직할 수 있는 등불 쓰기 💌"
          titleWidth="70%"
          fontSize
        />
      </HeaderComponent>
      <LampBanner />
      <ThemeBox>
        <LampTheme />
      </ThemeBox>
    </Background>
  );
}

export default LampMainPage;
