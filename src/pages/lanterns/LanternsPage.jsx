import React, { useEffect, useState } from "react";
import ScrollView from "../../components/common/templetes/scrollView.jsx/ScrollView";

import SearchHeader from "../../components/common/molecules/header/SearchHeader";
import LanternList from "../../components/lanterns/molecules/lanternList/LanternList";
import ToggleButton from "../../components/lanterns/atoms/button/ToggleButton";

function LanternsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getCurrentIndex = data => {
    setCurrentIndex(data);
  };

  const indexKor = ["최신순", "인기순"];
  const indexEng = ["current", "popular"];
  useEffect(() => {
    console.log(indexEng[currentIndex] + "순으로 api 호출");
  }, [currentIndex]);
  return (
    <ScrollView>
      <SearchHeader className={"scroll"} />
      <ToggleButton
        index={indexKor}
        currentIndex={currentIndex}
        getCurrentIndex={getCurrentIndex}
      />
      <LanternList />
    </ScrollView>
  );
}

export default LanternsPage;
