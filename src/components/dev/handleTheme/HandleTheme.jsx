import React from "react";
import { useRecoilState } from "recoil";
import { theme } from "../../../recoil/theme";
import styled from "styled-components";

function HandleTheme() {
  const [themeValue, setThemeValue] = useRecoilState(theme);

  return (
    <HandleThemeWrapper>
      <HandleThemeBtn onClick={() => setThemeValue("DAY")}>아침</HandleThemeBtn>
      <HandleThemeBtn onClick={() => setThemeValue("SUNSET")}>
        저녁
      </HandleThemeBtn>
      <HandleThemeBtn onClick={() => setThemeValue("NIGHT")}>밤</HandleThemeBtn>
    </HandleThemeWrapper>
  );
}

export default HandleTheme;

const HandleThemeWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;

  z-index: 1000000000;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;

const HandleThemeBtn = styled.div`
  cursor: pointer;
  padding: 12px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightgrey;
  border-radius: 8px;
  filter: drop-shadow(0px 0px 4px rgba(43, 44, 51, 0.25));
`;
