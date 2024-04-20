import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import MainPage from "./pages/main/MainPage";
import LanternColorPage from "./pages/lantern/LanternColorPage";
import LanternWritePage from "./pages/lantern/LanternWritePage";

import LanternsPage from "./pages/lanterns/LanternsPage";
import LanternsSearchPage from "./pages/lanterns/LanternsSearchPage";
import LanternDetailPage from "./pages/lantern/LanternDetailPage";

import LampMainPage from "./pages/lamp/LampMainPage";
import LampWritePage from "./pages/lamp/LampWritePage";
import LampFlyPage from "./pages/lamp/LampFlyPage";

import FortuneIntroPage from "./pages/fotrune/FortuneIntroPage";
import FortuneLeafPage from "./pages/fotrune/FortuneLeafPage";
import MyDetailPage from "./pages/fotrune/MyDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 메인페이지
      { path: "/", element: <MainPage /> },

      // 연등(렌턴) 작성 페이지
      { path: "/lanternColor", element: <LanternColorPage /> },
      { path: "/lanternWrite", element: <LanternWritePage /> },
      { path: "/lanternDetail/:detailId", element: <LanternDetailPage /> },

      // 연등(렌턴) 둘러보기 페이지
      { path: "/lanterns", element: <LanternsPage /> },
      { path: "/lanterns/:nickname", element: <LanternsSearchPage /> },

      // 등불(램프) 둘러보기 페이지
      { path: "/lampMain", element: <LampMainPage /> },
      { path: "/lampWrite/:themeId", element: <LampWritePage /> },
      { path: "/lampFly", element: <LampFlyPage /> },

      //포춘 페이지
      { path: "/fortuneIntro", element: <FortuneIntroPage /> },
      { path: "/fortuneLeaf", element: <FortuneLeafPage /> },
      { path: "/myDetail/:detailId", element: <MyDetailPage /> }
    ]
  }
]);

export default router;
