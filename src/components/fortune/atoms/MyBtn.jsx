import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { useNavigate } from "react-router-dom";

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
  const handleDownload = () => {
    html2canvas(document.getElementById("detailWrapper")).then(function (
      canvas
    ) {
      canvas.toBlob(function (blob) {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "lantern_image.png";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } else {
          console.error("Failed to generate blob.");
        }
      });
    });
  };

  const handleCopyLink = () => {
    LinkRef.current.select();
    document.execCommand("copy");
  };
  //메인 이동
  const navigate = useNavigate();
  //링크 복사
  const LinkRef = useRef(null);
  return (
    <MyBtnsBox>
      <Button>
        <img src="/img/Fortune/my_saveImg.png" onClick={handleDownload} />
        <p>이미지로 저장</p>
      </Button>
      <Button>
        <img src="/img/Fortune/my_goMain.png" onClick={() => navigate("/")} />
        <p>메인페이지</p>
      </Button>
      <Button>
        <img src="/img/Fortune/my_copyUrl.png" onClick={handleCopyLink} />
        <p>이루미 링크복사</p>
      </Button>
    </MyBtnsBox>
  );
}

export default MyBtn;
