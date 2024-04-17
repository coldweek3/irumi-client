import React from "react";
import styled from "styled-components";

const LanternWritebuttonWrapper = styled.div`
  z-index: 9;
  display: flex;
  justify-content: center;
  height: 39px;
`;

const NextBtn = styled.div`
  width: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$isSatisfied ? "#ffb5be" : "#9C9C9C")};
  color: #5b3a1a;
  border-radius: 20px;
  font-size: small;
  height: 39px;
  bottom: 0;
  position: absolute;
  margin-bottom: 2em;
  cursor: pointer;
  z-index: 99;
`;

function LanternWritebutton(props) {
  return (
    <LanternWritebuttonWrapper>
      <NextBtn onClick={props.onClick} $isSatisfied={props.isSatisfied}>
        {props.text}
      </NextBtn>
    </LanternWritebuttonWrapper>
  );
}

export default LanternWritebutton;
