import React from "react";
import { styled } from "styled-components";

import Button from "../../atoms/button/Button";
import ButtonList from "../../molecules/buttonList/ButtonList";
import EmSizeParent from "../../molecules/emSizeParent/EmSizeParent";

const ButtonSettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`;

function ButtonSetting() {
  return (
    <ButtonSettingWrapper>
      <ButtonList className={"layout-col-1-1"}>
        <Button className={"middle primary"}>버튼</Button>
        <Button className={"middle primary"}>버튼</Button>
      </ButtonList>
    </ButtonSettingWrapper>
  );
}

export default ButtonSetting;
