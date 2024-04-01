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
      <span>{theme}</span>

      <ButtonList className={"layout-col-1-1"}>
        <Button>1번 버튼</Button>
        <Button>2번 버튼</Button>
      </ButtonList>
    </HeaderWrapper>
  );
}

export default Header;
