import React from "react";
import styled from "styled-components";

const LoadingIndicatorWrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LoadingIndicator() {
  return <LoadingIndicatorWrapper>로딩 개크게 시작~</LoadingIndicatorWrapper>;
}

export default LoadingIndicator;
