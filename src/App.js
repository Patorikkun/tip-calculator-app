import React from "react";
import Calculator from "./Calculator";
import GlobalStyles from "./GlobalStyles";

import Heading from "./Heading";
function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Heading></Heading>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
