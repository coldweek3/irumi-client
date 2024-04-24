// LanternWishPaper.js

import React from "react";
import { styled } from "styled-components";

import LanternPw from "../atom/lanternPw";
import LanternEmail from "../../lamp/atoms/laternEmail";
import { useRecoilState } from "recoil";
import {
  nicknameState,
  wishState,
  passwordState,
  emailState
} from "../../../recoil/lanternContent";

import WishPaperInput from "../atom/WishPaperInput";

function LanternWishPaper({ inputType }) {
  const [password, setPassword] = useRecoilState(passwordState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [wish, setWish] = useRecoilState(wishState);
  const [email, setEmail] = useRecoilState(emailState);

  //비밀번호와 이메일 입력 핸들러를 동일하게 사용
  const handleInputChange = event => {
    const content = event.target.value;
    const trimmedContent = content.replace(/\s/g, "");
    setNickname(trimmedContent);
  };

  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword(inputValue);
    }
  };

  const handleEmailChange = event => {
    const inputValue = event.target.value;
    // 이메일 형식이면 setEmail 함수를 호출하여 상태 업데이트
    const isValidEmail = email => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(String(email).toLowerCase());
    };
    if (isValidEmail(inputValue)) {
      setEmail(inputValue);
    }
  };

  return (
    <LanternWishPaperWrapper>
      <LanternWishPaperForm>
        <LanternWishPaperContainer>
          <PaperInputContainer>
            <WishPaperInput
              inputType="text"
              inputTitle="닉네임"
              inputPlaceholder="닉네임을 입력하세요.(최대 10글자,공백 불가)"
              inputHeight="2em"
              inputPadding="0.3em"
              maxLength={10}
              inputoverflow="hidden"
              onChange={handleInputChange}
              value={nickname}
            />
            <WishPaperInput
              inputType="textarea"
              inputTitle="소원 내용"
              inputPlaceholder="소원 내용을 입력해주세요.(200자 이내)"
              inputHeight="13rem"
              maxLength={300}
              value={wish}
              onChange={e => setWish(e.target.value)}
            />
          </PaperInputContainer>

          {inputType === "password" && (
            <LanternPw value={password} onChange={handlePasswordChange} />
          )}

          {inputType === "email" && (
            <LanternEmail value={email} onChange={handleEmailChange} />
          )}
        </LanternWishPaperContainer>
      </LanternWishPaperForm>
    </LanternWishPaperWrapper>
  );
}

export default LanternWishPaper;

const LanternWishPaperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
  height: 50%;
  align-items: center;
`;

const LanternWishPaperForm = styled.form``;

const LanternWishPaperContainer = styled.div`
  max-width: 250px;
  background-color: #fbedd0;
  border-radius: 5px;
  max-height: 450px;
  padding: 15px 17px;
`;

const PaperInputContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
