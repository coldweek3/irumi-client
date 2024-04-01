import React from "react";
import { styled } from "styled-components";

export const ButtonListWrapper = styled.div`
  display: grid;

  &.layout-col-1-1 {
    grid-template-columns: 1fr 1fr;
  }
`;

function ButtonList({ children, className }) {
  return (
    <ButtonListWrapper className={className}>{children}</ButtonListWrapper>
  );
}

export default ButtonList;
