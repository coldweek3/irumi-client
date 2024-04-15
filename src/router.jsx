import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Main from "./pages/main/Main";
import WishWrite from "./pages/wishWrite/lanternWrite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/wishWrite", element: <WishWrite /> }
    ]
  }
]);

export default router;
