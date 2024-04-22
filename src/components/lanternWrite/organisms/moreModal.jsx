import React from "react";
import styled from "styled-components";

function MoreModal({ closeModal, openDeleteModal, openReportModal }) {
  return (
    <MoreModalWrapper>
      <MoreBtnBox>
        <MoreTitle>더보기</MoreTitle>
        <DeleteBtn onClick={openDeleteModal}>삭제</DeleteBtn>
        <ReportBtn onClick={openReportModal}>신고</ReportBtn>
      </MoreBtnBox>
      <CloseBtn onClick={closeModal}>닫기</CloseBtn>
    </MoreModalWrapper>
  );
}

export default MoreModal;

const MoreModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 80vw;
  padding: 0 10px 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 99;
  bottom: 0;
  max-width: 500px;
`;

const MoreBtnBox = styled.div`
  width: 100%;
  height: 163px;
  border-radius: 15px;
  background-color: #f1f1f1;
  margin-bottom: 8px;
`;

export const DeleteBtn = styled.div`
  width: 100%;
  height: 58px;
  border-bottom: 0.5px solid #3d4353;
  background-color: #f1f1f1;
  color: #0c74f4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;
const MoreTitle = styled(DeleteBtn)`
  height: 46px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  color: #3d4353;
  font-size: 12px;
`;
const ReportBtn = styled(DeleteBtn)`
  height: 58px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom: none;
`;

const CloseBtn = styled(MoreBtnBox)`
  height: 59px;
  background-color: #fff;
  color: #c31010;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;
