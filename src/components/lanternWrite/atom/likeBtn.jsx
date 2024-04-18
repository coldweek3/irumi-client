import React from "react";
import styled from "styled-components";
import { postLike } from "../../../apis/api/likeBtn";

const LikeBtnWrapper = styled.div`
  position: absolute;
  top: 90%;
  margin-left: 110px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const LikeBtnImg = styled.img`
  width: 15px;
  height: 13px;
`;

const LikeCountNum = styled.div`
  font-size: 10px;
  color: #5b3a1a;
`;

function LikeBtn({ handleLikeClick, isLiked, LikeCount }) {
  return (
    <LikeBtnWrapper onClick={handleLikeClick}>
      <LikeBtnImg
        src={isLiked ? "/img/Lantern/like_fill.png" : "/img/Lantern/like.png"}
      />
      <LikeCountNum>{LikeCount}</LikeCountNum>
    </LikeBtnWrapper>
  );
}

export default LikeBtn;
