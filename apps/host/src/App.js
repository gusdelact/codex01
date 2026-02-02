import React, { Suspense } from "react";

const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => (
  <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
    <h1>Host (Shell)</h1>
    <p>Este botón viene de un microfrontend remoto:</p>
    <Suspense fallback={<span>Cargando remote...</span>}>
      <RemoteButton />
    </Suspense>
  </main>
);

export default App;
