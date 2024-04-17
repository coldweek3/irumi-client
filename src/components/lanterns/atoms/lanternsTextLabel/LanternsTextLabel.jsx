import React from "react";
import styled from "styled-components";

const TextLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.none {
    padding: 40px 0px;
  }
  &.notNone {
    padding: 40px 0px;
    padding-bottom: 0;
  }
`;

function LanternsTextLabel({ children, className }) {
  return <TextLabelWrapper className={className}>{children}</TextLabelWrapper>;
}

export default LanternsTextLabel;
