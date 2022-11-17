import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { user } from "./data";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>
);
