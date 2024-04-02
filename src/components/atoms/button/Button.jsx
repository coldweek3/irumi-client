import React from "react";
import { styled } from "styled-components";

const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  //버튼 사이즈 시스템

  &.large {
    padding: 8px 0px;
    width: 100%;
    max-width: 500px;
    font-size: 20px;
  }

  //버튼 컬러 시스템
  &.primary {
    background-color: ${props => props.theme.main1};
    color: ${props => props.theme.font2};
  }
  &.primary:hover {
    background-color: ${props => props.theme.main1};
    color: ${props => props.theme.font2};
    border: 1px solid black;
  }

  &.normal {
    background-color: ${props => props.theme.grey1};
    color: ${props => props.theme.font1};
  }

  &.normal:hover {
    background-color: ${props => props.theme.grey1};
    color: ${props => props.theme.font1};
    border: 1px solid black;
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
