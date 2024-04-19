import React, { useState } from "react";
import styled from "styled-components";

const ConfirmModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmBox = styled.div`
  width: 282px;
  height: 110px;
  border-radius: 15px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  height: 64px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.5px solid #3d4353;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
`;

const SelectBox = styled.div`
  height: 46px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: row;
`;

const NoBtn = styled.div`
  border-radius: 0;
  border-bottom-left-radius: 15px;
  width: 141px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  border-right: 0.5px solid #3d4353;
  border-left: 0;
  cursor: pointer;
`;

const YesBtn = styled(NoBtn)`
  color: #007afe;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
`;

function ConfirmModal({ onClose, onConfirm }) {
  return (
    <ConfirmModalWrapper>
      <ConfirmBox>
        <Question>
          확인을 누르시면 연등이 달립니다! <br />
          달린 연등은 수정이 불가능해요.
        </Question>
        <SelectBox>
          <NoBtn onClick={onClose}>취소</NoBtn>
          <YesBtn onClick={onConfirm}>확인</YesBtn>
        </SelectBox>
      </ConfirmBox>
    </ConfirmModalWrapper>
  );
}
export default ConfirmModal;
