import React, { Children } from "react";
import styled from "styled-components";

const ImageContainerWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 800px;
  position: relative;
`;
function LampImageContainer({ children }) {
  return (
    <ImageContainerWrapper>
      <ImageContainer>{children}</ImageContainer>
    </ImageContainerWrapper>
  );
}

export default LampImageContainer;
