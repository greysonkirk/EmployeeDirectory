import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import EmpContainer from "./components/EmpContainer";
import Search from "./components/Search";
import API from "./utils/API";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEmp, setFilterEmp] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        // console.log(res.data.results)
        setEmployees(res.data.results);
        setFilterEmp(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
    const filteredEmp = employees.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.includes(search);
    });
    console.log(filteredEmp);
    setFilterEmp(filteredEmp);
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search);
    const filteredEmp = employees.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.includes(search);
    });
    console.log(filteredEmp);
    setFilterEmp(filteredEmp);
  };

  const sortName = (e) => {
    const myData = filteredEmp
    myData.sort();
 return (
     setFilterEmp(myData)
     )
  }

  return (
    <div>
      <Header />
      <Search
        handleSearchChange={handleSearchChange}
        handleInputChange={handleInputChange}
        results={search}
      />

      <EmpContainer 
      filteredEmp={filteredEmp}
      sortName={sortName}
      ></EmpContainer>
    </div>
  );
}

export default App;
