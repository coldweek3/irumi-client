import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  nicknameState,
  wishState,
  emailState
} from "../../recoil/lanternContent";
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";
import DescriptionText from "../../components/lanternWrite/atom/DescriptionText";
import LanternWritebutton from "../../components/lanternWrite/atom/button";
import LanternWishPaper from "../../components/lanternWrite/organisms/lanternWishPaper";
import { API } from "../../apis/utils";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
`;

const FirstthemeWritePage = () => {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [wish, setWish] = useRecoilState(wishState);
  const [email, setEmail] = useRecoilState(emailState); // 이메일 상태 추가
  const { backgroundImageUrl } = GradientBackground();
  const navigate = useNavigate();

  // 모든 입력란이 채워졌는지 확인하는 함수
  const isSatisfied = () => {
    return nickname.trim() !== "" && wish.trim() !== "";
  };

  const nextBtnOnClick = async () => {
    if (isSatisfied()) {
      try {
        const postData = {
          nickname: nickname,
          content: wish,
          email: email,
          theme: 1
        };

        // 백엔드 데이터 전송
        const response = await API.post("/api/lamplights", postData);

        // POST 성공 시
        console.log("등불이 저장되었습니다", response.data);
        // alert("소원이 이뤄질 거예요");
        alert("소원이 이뤄질 거예요");
        // Navigate to /flyLamp
        navigate("/flyLamp");
      } catch (error) {
        console.error("POST ERROR", error);
        alert("Failed to submit data. Please try again later.");
      }
    } else {
      alert("소원을 적어 주세요");
    }
  };

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <Header title="등불 작성하기" />
      <DescriptionText preText="이번 학기가 끝났을 때 나는 어떤 모습일까?" />
      <LanternWishPaper inputType="email" />
      <LanternWritebutton
        onClick={nextBtnOnClick}
        isSatisfied={isSatisfied()}
        text="다음"
      />
    </Background>
  );
};

export default FirstthemeWritePage;
