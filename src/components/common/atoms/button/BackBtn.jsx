import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BackBtn({ to }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate("/lanterns");
    }
  };

  return (
    <BackBtnWrapper onClick={handleBackClick}>
      <BackBtnImg onClick={handleBackClick} src="/common/backBtnImg.png" />
    </BackBtnWrapper>
  );
}

export default BackBtn;

const BackBtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 44px;
  cursor: pointer;
  min-height: 70px;
`;
const BackBtnImg = styled.img`
  width: 24px;
  height: 24px;
  z-index: 6;
`;
