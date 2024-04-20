import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteLantern } from "../../../apis/api/deleteLantern";
import CheckDeleteModal from "./CheckDeleteModal";

function PwModal({ closePwModal, data }) {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [showCheckDeleteModal, setShowCheckDeleteModal] = useState(false);
  const navigate = useNavigate();

  const openCheckDeleteModal = async () => {
    try {
      const response = await deleteLantern(data.id, password);
      console.log("응답상태: ", response.status);
      closePwModal();
      if (response.status === 204) {
        setShowCheckDeleteModal(true);
        alert("삭제되었습니다.");
        setTimeout(() => {
          navigate("/lanterns");
        }, 1000);
      }
    } catch (error) {
      setStatus(401);
      setShowCheckDeleteModal(true);
      alert("비밀번호가 일치하지 않습니다.");
      console.error("비밀번호 확인 중 오류 발생:", error);
      closePwModal();
    }
  };

  return (
    <>
      <PwModalWrapper>
        <PwBox>
          <PwInputBox>
            <p>비밀번호 입력</p>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </PwInputBox>
          <SelectBox>
            <NoBtn onClick={closePwModal}>취소</NoBtn>
            <YesBtn onClick={openCheckDeleteModal}>삭제</YesBtn>
            {/* 삭제를 눌렀을 때만 CheckDeleteModal을 렌더링 */}
            {showCheckDeleteModal && (
              <CheckDeleteModal
                status={status}
                showCheckDeleteModal={true}
                setShowCheckDeleteModal={true}
              />
            )}
          </SelectBox>
        </PwBox>
      </PwModalWrapper>
    </>
  );
}

export default PwModal;

const PwModalWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const PwBox = styled.div`
  width: 282px;
  height: 110px;
  border-radius: 15px;
  background-color: #f1f1f1;
`;

const SelectBox = styled.div`
  height: 46px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: row;
`;

const PwInputBox = styled.div`
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
  gap: 10px;

  p {
    padding-left: 8px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
  input {
    width: 100px;
    height: 34px;
    background-color: #d9d9d9;
    border: 1px solid #898989;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    font-size: 20px;
  }
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
  color: #c31010;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
  cursor: pointer;
`;
