import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 44px;
  background-color: red;

  &.scroll {
    position: fixed;
    max-width: 500px;

    transform: translate(-50%, 0%);
    left: 50%;
    top: 0%;
  }
`;

function SearchHeader({ className }) {
  return <HeaderWrapper className={className}>헤더</HeaderWrapper>;
}

export default SearchHeader;
