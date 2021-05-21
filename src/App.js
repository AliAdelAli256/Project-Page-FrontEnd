import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Ide from "./Project_Page/projectPage";
import navbar from "./Navbar/Navbar";


function App() {
  return (
    <Router>
      <Route path="/" component={navbar}/>
      <Route path="/" component={Ide} />
    </Router>
  );
}

export default App;
