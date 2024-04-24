import React from "react";
import styled from "styled-components";

function ReportAlertModal() {
  return (
    <ReportAlertWrapper>
      <ReportAlertBox>신고가 접수되었습니다</ReportAlertBox>
    </ReportAlertWrapper>
  );
}

export default ReportAlertModal;

const ReportAlertWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 15px;
  z-index: 99;
`;

const ReportAlertBox = styled.div`
  width: 15em;
  height: 64px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
