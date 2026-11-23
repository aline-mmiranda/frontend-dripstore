import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import StoreRoute from "./routes/StoreRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreRoute />
  </StrictMode>,
);
