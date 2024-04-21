import React from "react";
import styled from "styled-components";
import Button from "../../common/atoms/button/Button";

function LanternWritebutton(props) {
  return props.isSatisfied ? (
    <Button className={"middle primary"} onClick={props.onClick}>
      {props.text}
    </Button>
  ) : (
    <Button className={" disable middle"} onClick={props.onClick}>
      {props.text}
    </Button>
  );
}

export default LanternWritebutton;
