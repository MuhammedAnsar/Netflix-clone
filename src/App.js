import React from "react";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Rowpost from "./Components/RowPost/Rowpost";
import { actions, horror, originals } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={actions} title='Actions' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      
    </div>
  );
}

export default App;