import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";
import LampTheme from "../../components/lamp/atoms/LampTheme";
import LampBanner from "../../components/lamp/atoms/LampBanner";
import FixView from "../../components/common/templetes/fixView/FixView";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
`;

function LampMainPage() {
  return (
    <FixView>
      <Header
        title="더 오래 간직할 수 있는 등불 쓰기 💌"
        titleWidth="70%"
        fontSize
      />
      <LampBanner />
      <LampTheme />
    </FixView>
  );
}

export default LampMainPage;
