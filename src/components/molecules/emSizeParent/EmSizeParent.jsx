import React from "react";
import { styled } from "styled-components";
import { emSize } from "../../../recoil/emSize";
import { useRecoilValue } from "recoil";

import EmSizeChlid from "../../atoms/emSizeChlid/EmSizeChlid";

export const EmSizeParentWrapper = styled.div`
  font-size: ${props => props.$emsize}px;
`;

function EmSizeParent() {
  const emSizeValue = useRecoilValue(emSize);

  // 시간에 따라 현재 테마 받아오기
  return (
    <EmSizeParentWrapper $emsize={emSizeValue}>
      {emSizeValue}
      <EmSizeChlid />
    </EmSizeParentWrapper>
  );
}

export default EmSizeParent;
