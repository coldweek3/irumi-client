import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import LanternWrite from "./pages/Lantern/LanternWrite";
import LanternColor from "./pages/Lantern/LanternColorPage";

import MailWrite from "./pages/mailWirte/mailWrite";
import MainPage from "./pages/main/MainPage";
import LanternsPage from "./pages/lanterns/LanternsPage";
import LanternsSearchPage from "./pages/lanterns/LanternsSearchPage";
import LanternDetail from "./pages/Lantern/LanternDetail";

import LanternWrite from "./pages/Lantern/LanternWrite";
import LanternColor from "./pages/Lantern/LanternColorPage";

import MainPage from "./pages/main/MainPage";
import LanternsPage from "./pages/lanterns/LanternsPage";
import LanternsSearchPage from "./pages/lanterns/LanternsSearchPage";
import LampMain from "./pages/lamp/LampMain";
import FirstthemeWrite from "./pages/lamp/FirstthemeWrite";
import SecondthemeWrite from "./pages/lamp/SecondthemeWrite";
import ThirdthemeWrite from "./pages/lamp/ThirdthemeWrite";
import FlyLamp from "./pages/lamp/FlyLamp";
import FortuneIntro from "./pages/fotrune/FortuneIntro";
import FortuneLeaf from "./pages/fotrune/FotuneLeaf";
import MyDetail from "./pages/fotrune/MyDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/lanternColor", element: <LanternColor /> },
      { path: "/lanternWrite", element: <LanternWrite /> },
      { path: "/lanterns", element: <LanternsPage /> },
      { path: "/lanterns/:keyword", element: <LanternsSearchPage /> },

      { path: "/lampMain", element: <LampMain /> },
      { path: "/firstthemeWrite", element: <FirstthemeWrite /> },
      { path: "/secondthemeWrite", element: <SecondthemeWrite /> },
      { path: "/thirdthemeWrite", element: <ThirdthemeWrite /> }
    ]
  }
]);

export default router;
