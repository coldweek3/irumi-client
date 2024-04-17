import React from "react";
import styled from "styled-components";
import SearchBar from "../../atoms/searchBar/SearchBar";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &.scroll {
    position: fixed;
    max-width: 506px;

    transform: translate(-50%, 0%);
    left: 50%;
    top: 0%;
  }
`;

function SearchHeader({ className }) {
  return (
    <HeaderWrapper className={className}>
      <SearchBar />
    </HeaderWrapper>
  );
}

export default SearchHeader;
