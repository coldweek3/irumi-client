import React from "react";
import styled from "styled-components";

const TextLableWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  font-size: 24px;
  line-height: 2;
`;
function LampFlyTextLabel({ children }) {
  return <TextLableWrapper>{children}</TextLableWrapper>;
}

export default LampFlyTextLabel;
