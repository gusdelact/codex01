import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";

const root = createRoot(document.getElementById("root"));
root.render(
  <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
    <h1>Remote</h1>
    <p>Este es el microfrontend remoto ejecutándose solo.</p>
    <Button />
  </main>
);
