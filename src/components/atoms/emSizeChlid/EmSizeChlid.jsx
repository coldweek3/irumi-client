import React from "react";
import { styled } from "styled-components";

export const EmSizeChildWrapper = styled.div`
  font-size: 2em;
`;
function EmSizeChlid() {
  return <EmSizeChildWrapper>375px 기준 10px</EmSizeChildWrapper>;
}

export default EmSizeChlid;
