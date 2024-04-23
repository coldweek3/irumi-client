import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { emailState } from "../../../recoil/lanternContent";
import { API } from "../../../apis/utils";

const LanternWriteEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LanternWriteEmailTitle = styled.div`
  font-size: 9px;
  margin-right: 5px;
  color: #5b3a1a;
`;

const LanternWriteEmailInput = styled.input`
  width: 82%;
  min-width: 187px;
  background-color: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #898989;
  /* text-indent: 5px; */
  height: 2em;
  padding: 0.3em;

  &::placeholder {
    font-size: 8px;
    color: #898989;
  }
`;

function LanternEmail() {
  const [email, setEmail] = useRecoilState(emailState);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const nextBtnOnClick = async () => {
    const response = await API.post("/api/lamplights", {
      nickname: "사용자 닉네임",
      content: "사용자 소원",
      email: email,
      theme: 1
    });
  };

  return (
    <LanternWriteEmailWrapper>
      <LanternWriteEmailTitle>이메일</LanternWriteEmailTitle>
      <LanternWriteEmailInput
        type="email"
        placeholder="이메일 주소를 입력하세요! 등불이 메일로 전송됩니다!"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={nextBtnOnClick}></button>
    </LanternWriteEmailWrapper>
  );
}

export default LanternEmail;
