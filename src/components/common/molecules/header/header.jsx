import React from "react";
import styled from "styled-components";
import BackBtn from "../../atoms/button/BackBtn";

const HeaderWrapper = styled.div`
  z-index: 1000;
  width: 100%;
  height: 80px;

  padding: 0px 16px;
  padding-top: 4px;

  height: 80px;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  padding-right: 44px;
  width: ${props => props.titleWidth || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  font-size: ${props => props.fontSize || "20px"};
`;

function Header(props) {
  return (
    <HeaderWrapper>
      <BackBtn to={props.to} />
      <HeaderTitle titleWidth={props.titleWidth} fontSize={props.fontSize}>
        {props.title}
      </HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
