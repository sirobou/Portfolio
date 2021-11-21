import React from "react";
import { Initial } from "./components/Initial.js";
import { VFXProvider } from 'react-vfx'; 
import { Docs } from './components/docs.js'

function App() {
  return (
    <VFXProvider>
     <Initial />
     <Docs />
    </VFXProvider>
  );
}

export default App;