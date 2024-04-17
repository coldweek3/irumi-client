import React from "react";
import styled from "styled-components";

const TextLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;

  &.count {
    top: 24%;
    font-size: 20px;
    font-family: "LotteMartDreamBold";
  }

  &.notice {
    top: 30%;
    font-size: 14px;
    color: ${props => props.theme.hintColor};
  }
`;
function MainTextLabel({ children, className }) {
  return <TextLabelWrapper className={className}>{children}</TextLabelWrapper>;
}

export default MainTextLabel;
