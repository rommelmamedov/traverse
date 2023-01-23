import React, {Suspense, useEffect} from 'react';
import { Routes } from './Routes';
import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Suspense fallback="loading">
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
