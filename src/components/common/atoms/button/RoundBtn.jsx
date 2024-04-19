import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  // 버튼에 마우스를 올렸을 때
  &:hover {
    transform: scale(1.1);
  }

  width: 64px;
  height: 64px;
  border-radius: 64px;

  &.primary {
    background-color: ${props => props.theme.btn_primary};
    color: ${props => props.theme.btn_primary_font};
  }
  &.fix {
    position: fixed;
    bottom: 48px;
    right: 24px;
    z-index: 9999;
    filter: drop-shadow(0px 0px 4px rgba(43, 44, 51, 0.25));
  }
`;

const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;
function RoundBtn({ className, icon, onClick }) {
  return (
    <ButtonWrapper onClick={onClick} className={className}>
      <ButtonIcon src={icon} />
    </ButtonWrapper>
  );
}

export default RoundBtn;
