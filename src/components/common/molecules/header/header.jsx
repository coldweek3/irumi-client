import React from "react";
import styled from "styled-components";
import BackBtn from "../../atoms/button/BackBtn";

const HeaderWrapper = styled.div`
  height: 100px;
  flex-direction: row;
  display: flex;
`;

const HeaderTitle = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  font-size: 20px;
`;

function Header(props) {
  return (
    <HeaderWrapper>
      <BackBtn />
      <HeaderTitle>{props.title}</HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
