import React, { useState } from "react";
import { styled } from "styled-components";
import PaperInput from "../atom/input";
import LanternPw from "../atom/lanternPw";
import { useRecoilState } from "recoil";
import {
  nicknameState,
  wishState,
  passwordState
} from "../../../recoil/lanternContent";

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

function LanternWishPaper({ inputType }) {
  const [password, setPassword] = useRecoilState(passwordState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [wish, setWish] = useRecoilState(wishState);

  //비밀번호는 숫자만 들어가도록 하는 함수
  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword(inputValue);
    }
  };

  //닉네임 공백

  const handleInputChange = event => {
    const content = event.target.value;
    const trimmedContent = content.replace(/\s/g, "");
    setNickname(trimmedContent);
  };

  //소원 내용 작성
  const handleWishChange = event => {
    const content = event.target.value;
    setWish(content);
  };

  return (
    <LanternWishPaperWrapper>
      <LanternWishPaperForm>
        <LanternWishPaperContainer>
          <PaperInputContainer>
            <PaperInput
              inputTitle="닉네임"
              inputPlaceholder="닉네임을 입력하세요.(최대 10글자,공백 불가)"
              inputHeight="2em"
              inputPadding="6px"
              maxLength={10}
              inputoverflow="hidden"
              onChange={handleInputChange}
              value={nickname}
            />
            <PaperInput
              inputTitle="소원 내용"
              inputPlaceholder="소원 내용을 입력해주세요.(300자 이내)"
              inputHeight="17em"
              maxLength={300}
              value={wish}
              onChange={handleWishChange}
            />
          </PaperInputContainer>
          {/* 이거 가져다 쓸 때 inputType 정의해주면 됩니당. 저 LanternEmail은 임의로 써둔거고 바꿔도 됨!! */}
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
