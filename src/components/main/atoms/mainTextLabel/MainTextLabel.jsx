import React from "react";
import styled from "styled-components";

const TextLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  left: 50%;

  &.count {
    padding-top: 32px;
    font-size: 20px;
    font-family: "LotteMartDreamBold";
  }

  &.notice {
    padding-top: 16px;
    padding-bottom: 20px;
    font-size: 14px;
    color: ${props => props.theme.hintColor};
  }
`;
function MainTextLabel({ children, className }) {
  return <TextLabelWrapper className={className}>{children}</TextLabelWrapper>;
}

export default MainTextLabel;
