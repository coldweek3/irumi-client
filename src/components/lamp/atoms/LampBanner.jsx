import React from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { theme } from "../../../recoil/theme";

const Container = styled.div`
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
`;

const LampBannerDesign = styled.div`
  width: 80%;
  max-width: 27em;
  border-radius: 35px;
  opacity: 0px;
  box-shadow: 0px 4px 10px 2px #ffffff33;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: ${props =>
    props.$theme === "DAY"
      ? "linear-gradient(180deg, rgba(177, 222, 241, 0.5) 0%, rgba(130, 214, 251, 0.5) 100%)"
      : props.$theme === "SUNSET"
      ? "linear-gradient(180deg, rgba(105, 98, 138, 0.5) 0%, rgba(144, 110, 137, 0.5) 100%)"
      : "linear-gradient(180deg, rgba(16, 41, 81, 0.5) 0%, rgba(93, 109, 124, 0.5) 100%)"};
  overflow: auto;

  @media (max-width: 450px) {
    width: 88%;
  }
`;

const TextContainer = styled.div`
  padding: 16px;
  font-family: LotteMartDreamLight;
  display: flex;
  flex-direction: column;
  width: 98%;
  max-width: 27em;
  height: 150px;
  justify-content: center;
  gap: 17px;

  @media (max-width: 450px) {
    padding: 11px;
  }

  @media (max-width: 391px) {
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  line-height: 179%;
  font-size: 15px;

  @media (max-width: 470px) {
    font-size: 0.8em;
  }

  @media (min-width: 391px) {
    br.smallWidth {
      display: none;
    }
  }
`;

function LampBanner() {
  const currentTheme = useRecoilValue(theme);

  return (
    <Container>
      <LampBannerDesign $theme={currentTheme}>
        <TextContainer>
          <TextWrapper>
            step1. 원하는 테마를 선택한 뒤, <br />
            step2. 메일과 함께 해당 테마에 맞는 소원을 <br class="smallWidth" />
            적어보세요!
          </TextWrapper>
          <TextWrapper>테마 시기에 맞게 메일이 전송됩니다! 💌</TextWrapper>
        </TextContainer>
      </LampBannerDesign>
    </Container>
  );
}

export default LampBanner;
