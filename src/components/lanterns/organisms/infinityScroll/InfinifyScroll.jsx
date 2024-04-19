import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingIndicator from "../../../common/atoms/loading/LoadingIndicator";

const InfinityScrollWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;

function InfinifyScroll({ children, isLoading, isMoreData, onBottom }) {
  // target for infinite scroll observer
  // 해당 타겟이 옵저버 내 들어오게 되면, 함수가 실행됨
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    // 더 불러올 데이터가 있을 경우, target을 감지함
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
  }, [target]);

  const onIntersect = async ([entry], observer) => {
    // 전체 페이지 개수보다 현재 페이지 개수가 작을때만 실행됨
    if (isMoreData) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        observer.observe(entry.target);
        onBottom();
      }
    }
  };

  return (
    <InfinityScrollWrapper>
      {children}
      {/* 더 로드할 데이터가 있는 경우 타깃과 로딩 인디케이터를 걸어둔다. */}
      {isMoreData ? (
        <div ref={setTarget}>{isLoading ? <LoadingIndicator /> : ""}</div>
      ) : (
        <div />
      )}
    </InfinityScrollWrapper>
  );
}

export default InfinifyScroll;
