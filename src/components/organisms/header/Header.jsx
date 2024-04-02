import React from "react";
import { styled } from "styled-components";
import ButtonList from "../../molecules/buttonList/ButtonList";
import Button from "../../atoms/button/Button";

import { themeMode } from "../../../recoil/theme";
import { useRecoilValue } from "recoil";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function Header() {
  const theme = useRecoilValue(themeMode);

  return (
    <HeaderWrapper>
      <span>theme mode : {theme}</span>
    </HeaderWrapper>
  );
}

export default Header;
