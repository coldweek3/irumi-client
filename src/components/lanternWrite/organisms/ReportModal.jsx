import React, { useState } from "react";
import styled from "styled-components";
import { reportLantern } from "../../../apis/api/postReport";

function ReportModal({
  closeReportModal,
  openReportedModal,
  openIsReportedModal,
  detailId,
  userId
}) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = category => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleReport = async () => {
    try {
      // 사용자가 이미 해당 게시글을 신고했는지 확인
      const isAlreadyReported = localStorage.getItem(`reported_${detailId}`);
      if (isAlreadyReported) {
        openIsReportedModal();
        setTimeout(() => {
          closeReportModal();
        }, 2000);
        return;
      }

      // 사용자가 해당 게시글을 신고하지 않은 경우에만 처리
      await reportLantern(detailId, selectedCategories, userId);
      openReportedModal();

      // 사용자가 해당 게시글을 신고한 표시를 로컬 스토리지에 저장
      localStorage.setItem(`reported_${detailId}`, true);

      setTimeout(() => {
        closeReportModal();
      }, 2000);
    } catch (error) {
      console.error("Error reporting lantern:", error);
    }
  };

  return (
    <>
      <ReportModalWrapper>
        <ReportBox>
          <ReportTitle>
            해당 게시글을 정말
            <br />
            신고하시겠습니까?
          </ReportTitle>
          <ReportCheckBoxs>
            <CheckBox>
              <input
                type="checkbox"
                name="abuse"
                checked={selectedCategories.includes("abuse")}
                onChange={() => toggleCategory("abuse")}
                required
              />
              <p>욕설 및 비하</p>
            </CheckBox>
            <CheckBox>
              <input
                type="checkbox"
                name="fraud"
                checked={selectedCategories.includes("fraud")}
                onChange={() => toggleCategory("fraud")}
                required
              />
              <p>개인정보 유출 사칭, 사기</p>
            </CheckBox>
            <CheckBox>
              <input
                type="checkbox"
                name="explicit"
                checked={selectedCategories.includes("explicit")}
                onChange={() => toggleCategory("explicit")}
                required
              />
              <p>음란물 또는 불건전한 대화</p>
            </CheckBox>
            <CheckBox>
              <input
                type="checkbox"
                name="promotion"
                checked={selectedCategories.includes("promotion")}
                onChange={() => toggleCategory("promotion")}
                required
              />
              <p>영리목적이나 홍보성 게시글</p>
            </CheckBox>
          </ReportCheckBoxs>
          <Explain>
            신고는 반대의견을 나타내는 기능이 아닙니다.
            <br />
            신고 사유에 맞지 않는 신고를 했을 경우,
            <br />
            해당 신고는 처리되지 않습니다.
          </Explain>
          <ReportBtnBox>
            <ReportNoBtn onClick={closeReportModal}>취소</ReportNoBtn>
            <ReportYesBtn onClick={handleReport}>신고</ReportYesBtn>
          </ReportBtnBox>
        </ReportBox>
      </ReportModalWrapper>
    </>
  );
}

export default ReportModal;

const ReportModalWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ReportBox = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  transform: scale(0.7);
`;

const ReportTitle = styled.div`
  width: 100%;
  height: 130px;
  padding: 44px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 116.523%;
  display: flex;
  justify-content: center;
`;

const ReportCheckBoxs = styled.div`
  width: 100%;
  cursor: pointer;
`;

const CheckBox = styled.div`
  padding: 11px 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  input {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    background-color: #d9d9d9;
    margin-right: 14px;
  }
  input:checked {
    background-image: url("/img/Lantern/checked.png");
    background-size: 28px;
  }
  p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Explain = styled.div`
  width: 100%;
  padding-top: 27px;
  padding-bottom: 47px;
  display: flex;
  justify-content: center;
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
const ReportBtnBox = styled.div`
  width: 100%;
  height: 75px;
  border-top: 1px solid #b0b0b0;
  display: flex;
  flex-direction: row;
`;
const ReportNoBtn = styled.div`
  border-right: 1px solid #b0b0b0;
  width: 166px;
  height: 100%;
  background-color: transparent;
  color: black;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;
const ReportYesBtn = styled.div`
  color: #c31010;
  width: 166px;
  height: 100%;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;
