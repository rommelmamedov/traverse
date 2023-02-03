import React, { Suspense } from "react";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
