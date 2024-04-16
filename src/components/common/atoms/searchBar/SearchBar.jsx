import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  position: absolute;
  font-size: 14px;

  padding: 12px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1;
`;
const SearchWrapper = styled.form`
  width: 80%;
  height: 40px;
  position: relative;
`;

const SearchBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0;
  background-color: ${props => props.theme.searchBg};
  border-radius: 20px;
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
        type="text"
        value={keyword}
        onChange={keywordChangeHandler}
      />
      <SearchBackground />
    </SearchWrapper>
  );
}

export default SearchBar;
