import React from "react";
import { styled } from "styled-components";

const ButtonListWrapper = styled.div`
  display: grid;

  &.layout-1 {
    width: 100%;
  }

  &.layout-col-1-1 {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  &.layout-row-1-1 {
    width: 100%;
    grid-template-rows: 1fr 1fr;
    row-gap: 4px;
  }

  &.bottom {
    position: absolute;
    transform: translate(-50%, 0%);
    left: 50%;

    bottom: 0;
    padding-bottom: 40px;

    padding: 0 16px 40px 16px;
  }
  &.fixBottom {
    position: fixed;
    width: 100vh;
    max-width: 560px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding-bottom: 40px;
    display: flex;
    justify-content: end;
    align-items: end;
    padding-right: 24px;
    z-index: 0999;
  }
`;

function ButtonList({ children, className }) {
  return (
    <ButtonListWrapper className={className}>{children}</ButtonListWrapper>
  );
}

export default ButtonList;
