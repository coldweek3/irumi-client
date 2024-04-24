import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 44px;
  cursor: pointer;
`;
const BackBtnImg = styled.img`
  width: 24px;
  height: 24px;
`;

function BackBtn() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <BackBtnWrapper onClick={handleBackClick}>
      <BackBtnImg src="/common/backBtnImg.svg" />
    </BackBtnWrapper>
  );
}

export default BackBtn;
