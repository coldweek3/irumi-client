import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

//배경지 컴포넌트
import Header from "../../components/common/molecules/header/header";
import DescriptionText from "../../components/lanternWrite/atom/DescriptionText";
import LanternColor from "../../components/lanternWrite/molecules/LanternColorChoice";
import LanternColorConfirm from "../../components/lanternWrite/molecules/LanternColorConfirm";
import LanternWritebutton from "../../components/lanternWrite/atom/button";

import ButtonList from "../../components/common/molecules/buttonList/ButtonList";

import FixView from "../../components/common/templetes/fixView/FixView";
import { clickedState } from "../../recoil/lanternColor";

function LanternColorPage() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useRecoilState(clickedState);

  const handleButtonClick = () => {
    const selectedColors = Object.values(clicked);
    const isAnyColorSelected = selectedColors.some(color => color === true);

    if (isAnyColorSelected) {
      navigate("/lanternWrite");
    } else {
      alert("연등색을 골라주세요");
    }
  };

  return (
    <FixView>
      <Header title="연등 작성하기" />
      <DescriptionText
        preText="연등의 "
        Yellowtext="색상"
        nextText="을 골라주세요"
      />
      <LanternColor />
      <LanternColorConfirm />
      <ButtonList className={"layout-1 bottom"}>
        <LanternWritebutton
          onClick={handleButtonClick}
          isSatisfied={true}
          text="확인"
        />
      </ButtonList>
    </FixView>
  );
}

export default LanternColorPage;
