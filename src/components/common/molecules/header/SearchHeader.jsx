import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../../atoms/searchBar/SearchBar";

const HeaderWrapper = styled.div`
  backdrop-filter: blur(4px);
  z-index: 1000;
  width: 100%;
  height: 80px;
  padding-top: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &.scroll {
    position: fixed;
    max-width: 560px;

    transform: translate(-50%, 0%);
    left: 50%;
    top: 0%;
  }
`;

function SearchHeader({ className }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScorllY = window.scrollY;
      if (currentScorllY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScorllY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isVisible ? (
    <HeaderWrapper className={className}>
      <SearchBar />
    </HeaderWrapper>
  ) : (
    <div></div>
  );
}

export default SearchHeader;
