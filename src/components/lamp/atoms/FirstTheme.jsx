import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 40px; */
  /* border: 1px solid red; */
`;

const ThemeBox = styled.div`
  width: 90%;
  max-width: 24em;
  /* max-width: 27em; */
  height: 107px;
  border-radius: 30px;
  border: 2px solid #5b3a1a;
  box-shadow: 0px 4px 10px 2px #ffffff33;
  background: #fbedd0;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TextWrapper = styled.div`
  color: #5b3a1a;
`;

function FirstTheme() {
  return (
    <>
      <Link to={"/firstthemeWrite"}>
        <ThemeContainer>
          <ThemeBox>
            <TextWrapper>
              이번 학기가 끝났을 때 나는 어떤 모습일까?🤔
            </TextWrapper>
          </ThemeBox>
        </ThemeContainer>
      </Link>
      <Link to={"/secondthemeWrite"}>
        <ThemeContainer>
          <ThemeBox>
            <TextWrapper>올해가 지나고 난 어떤 것을 이뤘을까?🎄</TextWrapper>
          </ThemeBox>
        </ThemeContainer>
      </Link>
      <Link to={"/thirdthemeWrite"}>
        <ThemeContainer>
          <ThemeBox>
            <TextWrapper>내년의 오늘 난 어떤 모습일까?😎</TextWrapper>
          </ThemeBox>
        </ThemeContainer>
      </Link>
    </>
  );
}

export default FirstTheme;
