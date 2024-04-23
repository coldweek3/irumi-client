import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  nicknameState,
  wishState,
  passwordState
} from "../../recoil/lanternContent";
import { clickedState } from "../../recoil/lanternColor";

// 모달 컴포넌트 import
import ConfirmModal from "../../components/lanternWrite/organisms/confirmModal";

// API 함수 import
import { postLanternData } from "../../apis/api/lanternPost";
//import 컴포넌트
import Header from "../../components/common/molecules/header/header";
import DescriptionText from "../../components/lanternWrite/atom/DescriptionText";
import LanternWritebutton from "../../components/lanternWrite/atom/button";
import LanternWishPaper from "../../components/lanternWrite/organisms/lanternWishPaper";
import FixView from "../../components/common/templetes/fixView/FixView";

import ButtonList from "../../components/common/molecules/buttonList/ButtonList";

function LanternWritePage() {
  const nickname = useRecoilValue(nicknameState);
  const wish = useRecoilValue(wishState);
  const password = useRecoilValue(passwordState);
  const clicked = useRecoilValue(clickedState);
  const setNickname = useSetRecoilState(nicknameState);
  const setWish = useSetRecoilState(wishState);
  const setPassword = useSetRecoilState(passwordState);
  const setClicked = useSetRecoilState(clickedState);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // 모든 입력란이 채워졌는지 확인하는 함수
  const isSatisfied = () => {
    return (
      nickname.trim() !== "" &&
      wish.trim() !== "" &&
      password.length === 4 &&
      Object.values(clicked).some(value => value === true)
    );
  };

  const nextBtnOnClick = () => {
    if (isSatisfied()) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = async () => {
    console.log("모달 확인 버튼 클릭");
    setShowModal(false);
    try {
      // 포스트 요청 보내기
      const response = await postLanternData({
        nickname: nickname,
        content: wish + "\r\n",
        password: password,
        lanternColor: Object.keys(clicked).find(color => clicked[color])
      });

      const detailId = response.id;
      const Lanternid = response.id;

      // 포스트 성공 후 Recoil 상태 초기화
      setNickname("");
      setWish("");
      setPassword("");
      setClicked({});
      localStorage.setItem("Lanternid", Lanternid);

      navigate(`/fortuneIntro/${detailId}`);
    } catch (error) {
      console.error("Failed to post lantern data:", error);
    }
  };

  return (
    <FixView>
      <Header title="연등 작성하기" to="/lanternColor" />
      <DescriptionText
        preText="이루고 싶은 "
        Yellowtext="소원을 "
        nextText="작성해주세요"
      />
      <LanternWishPaper inputType="password" />

      <ButtonList className={"layout-1 bottom"}>
        <LanternWritebutton
          onClick={nextBtnOnClick}
          isSatisfied={isSatisfied()}
          text="다음"
        />
      </ButtonList>

      {showModal && (
        <ConfirmModal
          onClose={handleCloseModal}
          onConfirm={handleConfirmModal}
        />
      )}
    </FixView>
  );
}

export default LanternWritePage;
