import React from "react";
import { Initial } from "./components/Initial.js";
import { VFXProvider } from 'react-vfx'; 
import { Docs } from "./components/docs.js";

function App() {
  return (
    <>
     <Initial />
     <Docs />
    </>
  );
}

export default App;