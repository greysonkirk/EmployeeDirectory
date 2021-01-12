import React, { useEffect, useState } from "react";
import EmpTable from "./EmpTable";
import API from "../utils/API";
import EmpContext from "../utils/EmpContext";
import EmpList from '../components/EmpList'

function EmpContainer() {
  const [employees, setEmployees] = useState({});

 useEffect(() =>{
    API.getEmployees()
    .then((res) => {
      setEmployees({
          employees: res.data.results
          
      })
        // console.log(employees)
    })
    .catch((err) => console.log(err));

 },[])

 
 

  return (
    <div className="container main">
      <EmpContext.Provider value={employees}>
        <EmpTable>
            <EmpList></EmpList>
            </EmpTable>       
      </EmpContext.Provider>
    </div>
  );
}

export default EmpContainer;
