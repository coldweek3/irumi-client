import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Main from "./pages/main/Main";
import LanternWrite from "./pages/Lantern/LanternWrite";
import LanternColor from "./pages/Lantern/LanternColorPage";
import MailWrite from "./pages/mailWirte/mailWrite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/lanternColor", element: <LanternColor /> },
      { path: "/lanternWrite", element: <LanternWrite /> }
      { path: "/mailWrite", element: <MailWrite /> }
    ]
  }
]);

export default router;
