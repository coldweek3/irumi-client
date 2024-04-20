import React, { useState } from "react";
import styled from "styled-components";

const LanternWritePwWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LanternWritePwTitle = styled.div`
  font-size: 10px;
  margin-right: 5px;
  color: #5b3a1a;
`;

const LanternWritePwInput = styled.input`
  width: 60%;
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

function LanternEmail({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LanternWritePwWrapper>
      <LanternWritePwTitle>비밀번호</LanternWritePwTitle>
      <LanternWritePwInput
        value={value}
        onChange={onChange}
        placeholder="이메일 주소를 입력하세요! 등불이 메일로 전송됩니다!"
      />
    </LanternWritePwWrapper>
  );
}

export default LanternEmail;
