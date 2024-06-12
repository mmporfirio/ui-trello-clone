import ReactDOM from "react-dom/client";
import RouterProvider from "./routes/RouterProvider/RouterProvider.tsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <RouterProvider />
    <Toaster />
  </ThemeProvider>
);
