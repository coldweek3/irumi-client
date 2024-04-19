import React from "react";
import styled from "styled-components";

function CheckDeleteModal({ status }) {
  let alertText;

  if (status == 204) {
    alertText = "연등이 삭제되었습니다";
  } else if (status == 401) {
    alertText = "비밀번호가 일치하지 않습니다";
  } else {
    alertText = "비밀번호가 일치하지 않습니다";
  }

  return (
    <>
      <YesModalWrapper>
        <AlertBox>{alertText}</AlertBox>
      </YesModalWrapper>
    </>
  );
}

export default CheckDeleteModal;

const YesModalWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
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
  background-color: #f1f1f1;
  border-radius: 15px;
`;
