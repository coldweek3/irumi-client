import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LamplightBannerWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 0px 24px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LamplightBannerContent = styled.div`
  width: 100%;
  max-width: 312px;
  padding: 0px 32px;
  height: 70px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;
  font-size: 14px;

  background: linear-gradient(
    180deg,
    ${props => props.theme.bannerGradient1} 0.02%,
    ${props => props.theme.bannerGradient2} 99.98%
  );
  box-shadow: 0px 4px 10px 2px ${props => props.theme.bannerShadow};
`;

const LamplightBannerImg = styled.img`
  width: 32px;
`;

function LamplightBanner() {
  return (
    <Link to={"/lampMain"}>
      <LamplightBannerWrapper>
        <LamplightBannerContent>
          <LamplightBannerImg src="/img/lamplightIcon.png" />
          <p>나만의 등불을 메일로 간직하세요.</p>
        </LamplightBannerContent>
      </LamplightBannerWrapper>
    </Link>
  );
}

export default LamplightBanner;
