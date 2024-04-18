import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// import Main from "./pages/main/Main";
import LanternWrite from "./pages/Lantern/LanternWrite";
import LanternColor from "./pages/Lantern/LanternColorPage";
import MailWrite from "./pages/mailWirte/mailWrite";
import MainPage from "./pages/main/MainPage";
import LanternsPage from "./pages/lanterns/LanternsPage";
import LanternsSearchPage from "./pages/lanterns/LanternsSearchPage";
import LanternDetail from "./pages/Lantern/LanternDetail";

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
      { path: "/mailWrite", element: <MailWrite /> },
      { path: "/lanternDetail/:detailId", element: <LanternDetail /> }
    ]
  }
]);

export default router;
