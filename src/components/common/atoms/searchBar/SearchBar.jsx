import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 14px;

  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1;

  color: ${props => props.theme.searchFont};
`;
const SearhIcon = styled.img`
  width: 24px;
  height: 24px;
  z-index: 1;
`;
const SearchWrapper = styled.form`
  flex-grow: 1;

  position: relative;
  gap: 8px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
`;

const SearchBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0;
  background-color: ${props => props.theme.searchBg};
  border-radius: 100000px;

  opacity: 70%;
  z-index: 0;
`;

function SearchBar() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(keyword);

    if (keyword != "") {
      location.href = "/lanterns/" + keyword;
    }
  };

  const [keyword, setKeyword] = useState("");

  const keywordChangeHandler = event => {
    setKeyword(event.target.value);
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchInput
        placeholder="이름을 검색해보세요!"
        type="text"
        value={keyword}
        onChange={keywordChangeHandler}
      />
      <SearhIcon src={"/icon/search.svg"} onClick={handleSubmit} />
      <SearchBackground />
    </SearchWrapper>
  );
}

export default SearchBar;
