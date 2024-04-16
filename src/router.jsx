import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Main from "./pages/main/Main";
import WishWrite from "./pages/wishWrite/lanternWrite";
import MailWrite from "./pages/mailWirte/mailWrite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/wishWrite", element: <WishWrite /> },
      { path: "/mailWrite", element: <MailWrite /> }
    ]
  }
]);

export default router;
