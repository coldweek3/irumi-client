import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BackBtn({ to }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (to) {
      navigate(to);
    } else {
      // to props가 전달되지 않은 경우 메인 페이지로 이동
      navigate("/");
    }
  };

  return (
    <BackBtnWrapper onClick={handleBackClick}>
      <BackBtnImg src="/common/backBtnImg.png" />
    </BackBtnWrapper>
  );
}

export default BackBtn;

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
