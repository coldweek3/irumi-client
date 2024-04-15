import React from "react";
import styled from "styled-components";

//배경지 컴포넌트
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";

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
      <div>소원지 작성하는 페이지입니다~</div>
    </Background>
  );
}

export default wishWrite;
