import React from "react";
import styled from "styled-components";

function DeleteModal({ closeDeleteModal, openPwModal, closePwModal }) {
  const handleConfirm = () => {
    // "확인" 버튼 클릭 시 PwModal 열기
    openPwModal();
    // DeleteModal 닫기
    closeDeleteModal();
  };

  return (
    <>
      <DeleteModalWrapper>
        <DeleteBox>
          <Question>연등을 삭제하시겠습니까?</Question>
          <SelectBox>
            <NoBtn onClick={closeDeleteModal}>취소</NoBtn>
            <YesBtn onClick={handleConfirm}>확인</YesBtn>
          </SelectBox>
        </DeleteBox>
      </DeleteModalWrapper>
    </>
  );
}

export default DeleteModal;

const DeleteModalWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const DeleteBox = styled.div`
  width: 282px;
  height: 110px;
  border-radius: 15px;
  background-color: #f1f1f1;
`;

const Question = styled(DeleteBox)`
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
`;

const SelectBox = styled.div`
  height: 46px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: row;
`;

const NoBtn = styled(DeleteBox)`
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
`;

const YesBtn = styled(NoBtn)`
  color: #c31010;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
`;
