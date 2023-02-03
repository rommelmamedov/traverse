import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import "./styles/index.scss";
import App from "./App";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
