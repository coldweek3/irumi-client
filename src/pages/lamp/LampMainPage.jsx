import React from "react";
import Header from "../../components/common/molecules/header/header";
import LampTheme from "../../components/lamp/atoms/LampTheme";
import LampBanner from "../../components/lamp/atoms/LampBanner";
import FixView from "../../components/common/templetes/fixView/FixView";

function LampMainPage() {
  return (
    <FixView>
      <Header title="등불 쓰기" />
      <LampBanner />
      <LampTheme />
    </FixView>
  );
}

export default LampMainPage;
