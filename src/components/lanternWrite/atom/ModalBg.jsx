//모달 open시 배경 투명도 처리하는 부분입니다.

import React from "react";

function ModalBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 7
      }}
    />
  );
}

export default ModalBackground;
