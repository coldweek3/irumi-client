import React from "react";
import { styled } from "styled-components";

const ButtonWrapper = styled.div`
  cursor: pointer;

  &.small {
    padding: 7px 7px;
    font-size: 1rem;
  }
  &.middle {
    padding: 10px 10px;
    font-size: 1.2rem;
  }
  &.large {
    padding: 14px 14px;
    font-size: 1.4rem;
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
