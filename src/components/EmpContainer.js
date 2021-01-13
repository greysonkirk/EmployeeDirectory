import React, { useEffect, useState } from "react";
import EmpTable from "../components/EmpTable";
import API from "../utils/API";
import EmpContext from "../utils/EmpContext";
import EmpList from "../components/EmpList";
import Search from "../components/Search";
 

function EmpContainer() {
  const [employees, setEmployees] = useState({
    employees: [],
    order: "ascend",
    filteredUsers: []
  });

 


  return (
    <div className="container main">
      <EmpContext.Provider value={employees}>
        <Search handleSearchChange />
        <EmpTable>
          <EmpList></EmpList>
        </EmpTable>
      </EmpContext.Provider>
    </div>
  );
}

export default EmpContainer;
