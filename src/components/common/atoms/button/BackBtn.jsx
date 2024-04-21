import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackBtnContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const BackBtnImg = styled.img`
  width: 7%;
  margin-left: 24px;
  cursor: pointer;
  z-index: 9;
`;

function BackBtn() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <BackBtnContainer onClick={handleBackClick}>
      <BackBtnImg src="/common/backBtnImg.png" />
    </BackBtnContainer>
  );
}

export default BackBtn;
