// LampTheme.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LampThemeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 40px 16px 64px 16px;
  gap: 16px;
  justify-content: space-between;
  max-height: 500px;
`;

const ThemeBox = styled(Link)`
  padding: 40px 20px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #5b3a1a;

  background: #fbedd0;

  text-align: center;

  box-shadow: 0px 4px 10px 2px rgba(255, 255, 255, 0.2);
`;

function LampTheme() {
  return (
    <LampThemeWrapper>
      <ThemeBox to={"/lampWrite/1"}>
        이번 학기가 끝났을 때 나는 어떤 모습일까?🤔
      </ThemeBox>
      <ThemeBox to={"/lampWrite/1"}>
        올해가 지나고 난 어떤 것을 이뤘을까?🎄
      </ThemeBox>
      <ThemeBox to={"/lampWrite/1"}>내년의 오늘 난 어떤 모습일까?😎</ThemeBox>
    </LampThemeWrapper>
  );
}

export default LampTheme;
