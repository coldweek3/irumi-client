import React from "react";
import { styled } from "styled-components";

import Button from "../../atoms/button/button";
import ButtonList from "../../molecules/buttonList/buttonList";
import EmSizeParent from "../../molecules/emSizeParent/emSizeParent";

export const ButtonSettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`;

function ButtonSetting() {
  return (
    <ButtonSettingWrapper>
      <EmSizeParent />
      <ButtonList className={"layout-col-1-1"}>
        <Button className={"large normal"}>라지1</Button>
        <Button className={"large primary"}>라지2</Button>
      </ButtonList>

      <ButtonList className={"layout-1"}>
        <Button className={"large primary"}>라지1</Button>
      </ButtonList>

      <ButtonList className={"layout-row-1-1"}>
        <Button className={"large primary"}>라지1</Button>
        <Button className={"large normal"}>라지2</Button>
      </ButtonList>
    </ButtonSettingWrapper>
  );
}

export default ButtonSetting;
