import React, { useState } from "react";
import styled from "styled-components";

function LanternPw({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <LanternWritePwWrapper>
      <LanternWritePwTitle>비밀번호</LanternWritePwTitle>
      <LanternWritePwInput
        value={value}
        onChange={onChange}
        required
        minLength={4}
        maxLength={4}
        inputMode="numeric"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        placeholder="네 자리 숫자를 입력해주세요"
      />
      <LanternWritePwEye
        src={
          showPassword ? "/img/Lantern/pw_on.png" : "/img/Lantern/pw_off.png"
        }
        onClick={handleEyeClick}
      />
    </LanternWritePwWrapper>
  );
}

export default LanternPw;

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

const LanternWritePwEye = styled.img`
  width: 1.3em;
  margin-left: 15px;
  cursor: pointer;
`;
