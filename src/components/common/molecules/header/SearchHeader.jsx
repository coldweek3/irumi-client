import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../../atoms/searchBar/SearchBar";
import BackBtn from "../../atoms/button/BackBtn";

const HeaderWrapper = styled.div`
  backdrop-filter: blur(4px);
  z-index: 1000;
  width: 100%;
  height: 80px;
  padding-top: 4px;

  display: flex;

  align-items: center;

  padding: 16px;

  &.scroll {
    position: fixed;
    max-width: 560px;

    transform: translate(-50%, 0%);
    left: 50%;
    top: 0%;
  }
  animation: ani_slide_in_top 0.2s ease-out forwards;
  @keyframes ani_slide_in_top {
    0% {
      opacity: 0%;
      top: -80px;
    }
    100% {
      opacity: 100%;
      top: 0%;
    }
  }
`;

function SearchHeader({ className, to }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScorllY = window.scrollY;
      if (currentScorllY > lastScrollY && currentScorllY > 30) {
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
      <BackBtn to={to} />
      <SearchBar />
    </HeaderWrapper>
  ) : (
    <div></div>
  );
}

export default SearchHeader;
