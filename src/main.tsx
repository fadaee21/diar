import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "@styles/theme/index.ts";
import { RTL } from "@styles/theme/rtl.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import SWRConfiguration from "./services/SWRConfiguration.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RTL>
      <ThemeProvider theme={theme}>
        <SWRConfiguration>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SWRConfiguration>
      </ThemeProvider>
    </RTL>
  </React.StrictMode>
);
