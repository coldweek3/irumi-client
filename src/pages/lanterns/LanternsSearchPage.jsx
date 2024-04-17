import React, { useEffect, useState } from "react";
import ScrollView from "../../components/common/templetes/scrollView/ScrollView";

import SearchHeader from "../../components/common/molecules/header/SearchHeader";
import LanternList from "../../components/lanterns/molecules/lanternList/LanternList";

import { useParams } from "react-router-dom";
import { getLanterns } from "../../apis/api/lantern";
import LoadingIndicator from "../../components/common/atoms/loading/LoadingIndicator";
import InitView from "../../components/common/templetes/initView/InitView";
import { PaginationTotalPage } from "../../emun/pagination";
import LanternsTextLabel from "../../components/lanterns/atoms/lanternsTextLabel/LanternsTextLabel";

function LanternsSearchPage() {
  const params = useParams();

  // API 호출 관련
  const [isInit, setIsInit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [lanterns, setLanterns] = useState([]);
  const [totPage, setTotPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    await getLanterns(
      `recent?page=${currentPage}&nickname=${params.keyword}`
    ).then(result => {
      if (result.type == "clear") {
        setLanterns(result.data.results);
        setTotPage(PaginationTotalPage(result.data.count));
        setIsInit(false);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // target for infinite scroll observer
  // 해당 타겟이 옵저버 내 들어오게 되면, 함수가 실행됨
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;

    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
  }, [target]);

  const onIntersect = async ([entry], observer) => {
    // 전체 페이지 개수보다 현재 페이지 개수가 작을때만 실행됨
    if (currentPage < totPage)
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setCurrentPage(currentPage + 1);
        observer.observe(entry.target);
      }
  };

  // 다음 페이지를 불러오는 함수
  const loadData = async () => {
    setIsLoading(true);
    await getLanterns(
      `recent?page=${currentPage}&nickname=${params.keyword}`
    ).then(result => {
      setIsLoading(false);
      if (result.type == "clear") {
        setLanterns(prevLanterns => [...prevLanterns, ...result.data.results]);
      }
    });
  };

  useEffect(() => {
    if (currentPage > 1) {
      loadData();
    }
  }, [currentPage]);

  return isInit ? (
    <InitView />
  ) : (
    <ScrollView>
      <SearchHeader className={"scroll"} />

      {/* 검색 결과 분기 설정 */}

      {lanterns.length == 0 ? (
        <LanternsTextLabel className={"none"}>
          '{params.keyword}'에 대한 검색 결과가 없습니다.
        </LanternsTextLabel>
      ) : (
        <>
          <LanternsTextLabel className={"notNone"}>
            '{params.keyword}'에 대한 검색 결과입니다.
          </LanternsTextLabel>
          <LanternList lanterns={lanterns} />
        </>
      )}

      <div ref={setTarget}>{isLoading ? <LoadingIndicator /> : ""}</div>
    </ScrollView>
  );
}

export default LanternsSearchPage;
