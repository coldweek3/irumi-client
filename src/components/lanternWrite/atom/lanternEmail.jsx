import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { emailState } from "../../../recoil/lanternContent";

const LanternWriteEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LanternWriteEmailTitle = styled.div`
  font-size: 10px;
  margin-right: 5px;
  color: #5b3a1a;
`;

const LanternWriteEmailInput = styled.input`
  width: 82%;
  background-color: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #898989;
  text-indent: 5px;
  height: 2em;

  &::placeholder {
    font-size: 10px;
    color: #898989;
  }
`;

function LanternEmail() {
  const [email, setEmail] = useRecoilState(emailState);

  const handleEmailChange = event => {
    setEmail(event.target.value);
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
    </LanternWriteEmailWrapper>
  );
}

export default LanternEmail;
