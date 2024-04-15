import React from "react";
import styled from "styled-components";

//배경지 컴포넌트
import GradientBackground from "../../components/organisms/Background/GradientBackground";
import Header from "../../components/molecules/header/header";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
`;

function wishWrite() {
  const { backgroundImageUrl } = GradientBackground();

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <Header title="소원 작성하기" />
    </Background>
  );
}

export default wishWrite;
