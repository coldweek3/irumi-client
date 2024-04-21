import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//배경지 컴포넌트
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";
import DescriptionText from "../../components/lanternWrite/atom/DescriptionText";
import LanternColor from "../../components/lanternWrite/molecules/LanternColorChoice";
import LanternColorConfirm from "../../components/lanternWrite/molecules/LanternColorConfirm";
import LanternWritebutton from "../../components/lanternWrite/atom/button";

import ButtonList from "../../components/common/molecules/buttonList/ButtonList";


import FixView from "../../components/common/templetes/fixView/FixView";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
`;

function LanternColorPage() {
  const { backgroundImageUrl } = GradientBackground();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/lanternWrite");
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
