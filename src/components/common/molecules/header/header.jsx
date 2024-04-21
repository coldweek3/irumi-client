import React from "react";
import styled from "styled-components";
import BackBtn from "../../atoms/button/BackBtn";

const HeaderWrapper = styled.div`
  height: 80px;
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  height: 80px;
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
      {/* <BackBtn /> */}
      <HeaderTitle titleWidth={props.titleWidth} fontSize={props.fontSize}>
        {props.title}
      </HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
