import React, { useEffect } from "react";
import styled from "styled-components";

export const YesModalWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const AlertBox = styled.div`
  width: 270px;
  height: 64px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3d4353;
`;

function CheckDeleteModal({ isPasswordCorrect }) {
  const alertText = isPasswordCorrect
    ? "연등이 삭제되었습니다"
    : "비밀번호가 일치하지 않습니다";

  return (
    <>
      <YesModalWrapper>
        <AlertBox>{alertText}</AlertBox>
      </YesModalWrapper>
    </>
  );
}

export default CheckDeleteModal;
