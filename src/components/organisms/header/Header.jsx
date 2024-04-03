import React from "react";
import { styled } from "styled-components";

import { theme } from "../../../recoil/theme";
import { useRecoilValue } from "recoil";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function Header() {
  const themeValue = useRecoilValue(theme);

  return (
    <HeaderWrapper>
      <span>theme mode : {themeValue}</span>
    </HeaderWrapper>
  );
}

export default Header;
