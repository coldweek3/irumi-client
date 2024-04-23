import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { theme } from "../../../recoil/theme";
import { day } from "../../../style/theme";

const MyBtnsBox = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 4%;
  z-index: 10000;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 46px;
    height: 46px;
    margin-bottom: 6px;
    cursor: pointer;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;

    /* 테마 스타일링 */
    ${({ theme }) => css`
      color: ${theme === "DAY" ? "#5b3a1a" : "#fafbfd"};
    `}
  }
`;

const MyBtn = ({
  handleDownload,
  LanternRef,
  TitleSecRef,
  ContentSecRef,
  detailId
}) => {
  const navigate = useNavigate();
  const currentTheme = useRecoilValue(theme);

  const handleCopyLink = async () => {
    try {
      const currentURL = `${window.location.origin}/lanternDetail/${detailId}`;
      if (currentURL) {
        await navigator.clipboard.writeText(currentURL);
        alert("링크가 복사되었습니다!");
      }
    } catch (error) {
      console.error("Failed to copy link:", error);
      alert(
        "링크 복사에 실패했습니다. 브라우저가 해당 기능을 지원하지 않을 수 있습니다."
      );
    }
  };

  return (
    <MyBtnsBox>
      <Button theme={currentTheme}>
        <img
          src="/img/Fortune/my_saveImg.png"
          onClick={() => handleDownload(LanternRef, TitleSecRef, ContentSecRef)}
          alt="Save Image"
        />
        <p>이미지로 저장</p>
      </Button>
      <Button theme={currentTheme}>
        <img
          src="/img/Fortune/my_goMain.png"
          onClick={() => navigate("/")}
          alt="Go to Main"
        />
        <p>메인페이지</p>
      </Button>
      <Button theme={currentTheme}>
        <img
          src="/img/Fortune/my_copyUrl.png"
          onClick={handleCopyLink}
          alt="Copy URL"
        />
        <p>이루미 링크복사</p>
      </Button>
    </MyBtnsBox>
  );
};

export default MyBtn;
