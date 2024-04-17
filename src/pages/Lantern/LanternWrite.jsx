import React, { useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import {
  nicknameState,
  wishState,
  passwordState
} from "../../recoil/lanternContent";

//import 컴포넌트
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";
import DescriptionText from "../../components/lanternWrite/atom/DescriptionText";
import LanternWritebutton from "../../components/lanternWrite/atom/button";
import LanternWishPaper from "../../components/lanternWrite/organisms/lanternWishPaper";

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
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [wish, setWish] = useRecoilState(wishState);
  const [password, setPassword] = useRecoilState(passwordState);

  // 모든 입력란이 채워졌는지 확인하는 함수
  const isSatisfied = () => {
    return nickname.trim() !== "" && wish.trim() !== "" && password.length == 4;
  };

  const nextBtnOnClick = () => {
    console.log("다음 페이지 이동하는 것 만들어야 함");
    alert("good");
  };

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <Header title="연등 작성하기" />
      <DescriptionText
        preText="이루고 싶은 "
        Yellowtext="소원을 "
        nextText="작성해주세요"
      />
      <LanternWishPaper inputType="password" />
      <LanternWritebutton
        onClick={isSatisfied() ? nextBtnOnClick : undefined}
        isSatisfied={isSatisfied()}
        text="다음"
      />
    </Background>
  );
}

export default wishWrite;
