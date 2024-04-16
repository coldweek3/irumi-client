import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import WishWrite from "./pages/wishWrite/lanternWrite";
import MailWrite from "./pages/mailWirte/mailWrite";
import MainPage from "./pages/main/MainPage";
import LanternsPage from "./pages/lanterns/LanternsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/wishWrite", element: <WishWrite /> },
      { path: "/lanternList", element: <LanternsPage /> },
      { path: "/mailWrite", element: <MailWrite /> }
    ]
  }
]);

export default router;
