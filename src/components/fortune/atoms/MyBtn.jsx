import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver"; // FileSaver.js 라이브러리 추가

const MyBtnsBox = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 3%;
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
    color: #fafbfd;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
  }
`;

function MyBtn() {
  // 메인 이동
  const navigate = useNavigate();

  //이미지 저장
  const LanternRef = useRef();

  const handleDownload = async () => {
    if (!LanternRef.current) return;

    try {
      const div = LanternRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob(blob => {
        if (blob !== null) {
          saveAs(blob, "당신의_연등.png"); // 파일 이름을 변경해도 됩니다.
        }
      });
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      const currentURL = window.location.href;
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
      <Button>
        <img
          src="/img/Fortune/my_saveImg.png"
          onClick={handleDownload}
          alt="Save Image"
        />
        <p>이미지로 저장</p>
      </Button>
      <Button>
        <img
          src="/img/Fortune/my_goMain.png"
          onClick={() => navigate("/")}
          alt="Go to Main"
        />
        <p>메인페이지</p>
      </Button>
      <Button>
        <img
          src="/img/Fortune/my_copyUrl.png"
          onClick={handleCopyLink}
          alt="Copy URL"
        />
        <p>이루미 링크복사</p>
      </Button>
    </MyBtnsBox>
  );
}

export default MyBtn;
