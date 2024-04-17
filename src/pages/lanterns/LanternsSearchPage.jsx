import React, { useEffect, useState } from "react";
import ScrollView from "../../components/common/templetes/scrollView.jsx/ScrollView";

import SearchHeader from "../../components/common/molecules/header/SearchHeader";
import LanternList from "../../components/lanterns/molecules/lanternList/LanternList";

import { useParams } from "react-router-dom";

function LanternsSearchPage() {
  const params = useParams();
  console.log(params.keyword + "의 api를 호출합니다.");

  return (
    <ScrollView>
      <SearchHeader className={"scroll"} />
      {/* <div>{params.keyword}의 검색 결과 입니다.</div> */}
      <LanternList />
    </ScrollView>
  );
}

export default LanternsSearchPage;
