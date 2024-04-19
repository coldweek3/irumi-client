import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import MainPage from "./pages/main/MainPage";

import LanternColorPage from "./pages/lantern/LanternColorPage";
import LanternWritePage from "./pages/lantern/LanternWritePage";

import LanternsPage from "./pages/lanterns/LanternsPage";
import LanternsSearchPage from "./pages/lanterns/LanternsSearchPage";
import LanternDetailPage from "./pages/lantern/LanternDetailPage";

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
      { path: "/lanterns/:keyword", element: <LanternsSearchPage /> }

      // 등불(램프) 관련 페이지
      // { path: "/lampMain", element: <LampMain /> },
      // { path: "/firstthemeWrite", element: <FirstthemeWrite /> },
      // { path: "/secondthemeWrite", element: <SecondthemeWrite /> },
      // { path: "/thirdthemeWrite", element: <ThirdthemeWrite /> }
    ]
  }
]);

export default router;
