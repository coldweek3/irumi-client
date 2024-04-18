import React from "react";
import styled from "styled-components";

import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";
import DescriptionText from "../../components/lanternWrite/atom/DescriptionText";
import LanternWritebutton from "../../components/lanternWrite/atom/button";
import LanternWishPaper from "../../components/lanternWrite/organisms/lanternWishPaper";

//등불 배너
import LampBanner from "../../components/lamp/atoms/LampBanner";

//테마 선택
import FirstTheme from "../../components/lamp/atoms/FirstTheme";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
`;

const ThemeBox = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid red; */
`;

function LampMain() {
  const { backgroundImageUrl } = GradientBackground();

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <Header title="더 오래 간직할 수 있는 등불 쓰기💌" />
      <ThemeBox>
        <LampBanner />
        <FirstTheme />
      </ThemeBox>
    </Background>
  );
}

export default LampMain;
