import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackBtnContainer = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 1em;
  z-index: 9;
`;

const BackBtnImg = styled.img`
  width: 2em;
  height: 1.5em;
  margin-left: 1.5em;
  cursor: pointer;
`;

function BackBtn() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <BackBtnContainer onClick={handleBackClick}>
      <BackBtnImg img src="/common/backBtnImg.png" />
    </BackBtnContainer>
  );
}

export default BackBtn;
