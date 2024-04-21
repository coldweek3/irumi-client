import React from "react";
import { styled } from "styled-components";

const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  // 버튼에 마우스를 올렸을 때
  &.primary :hover {
    transform: scale(1.1);
  }

  //버튼 사이즈 시스템

  &.middle {
    font-size: 14px;
    line-height: calc(16 / 14);
    padding: 12px 20px;
    border-radius: 20px;
  }

  // 버튼 컬러 시스템
  &.primary {
    background-color: ${props => props.theme.btn_primary};
    color: ${props => props.theme.btn_primary_font};
  }
  &.disable {
    background-color: #9c9c9c;
    color: white;
  }
`;

function Button({ children, onClick, className }) {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
