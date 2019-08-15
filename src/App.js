import React from "react";
import "./App.css";
import Nasaapp from "./components/Nasaapp"
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'


function App() {
  return (
    <Container text>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <Nasaapp />
    </Container>
  );
}

export default App;
