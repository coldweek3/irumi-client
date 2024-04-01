import React from "react";
import { styled } from "styled-components";
import ButtonList from "../../molecules/buttonList/ButtonList";
import Button from "../../atoms/button/Button";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderWrapper>
      <span>헤더</span>
      <ButtonList className={"layout-col-1-1"}>
        <Button>1번 버튼</Button>
        <Button>2번 버튼</Button>
      </ButtonList>
    </HeaderWrapper>
  );
}

export default Header;
