import React from "react";
import Header from "./components/Header";
import EmpContainer from "./components/EmpContainer";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Search/>
      <EmpContainer/>
    </div>
  );
}

export default App;
