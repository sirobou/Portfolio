import React from "react";
import { Initial } from "./components/Initial.js";
import { VFXProvider } from 'react-vfx';

function App() {
  return (
    <VFXProvider>
     <Initial />
    </VFXProvider>
  );
}

export default App;