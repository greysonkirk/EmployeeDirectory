import React,{useEffect, useState} from "react";
import EmployeeList from "./EmployeeList"
import API from "../utils/API";
import EmpContext from "../utils/EmpContext";


function EmpContainer() {

    const [employee, setEmployee] = useState({});

getEmployees()

    function getEmployees() {
        API.getEmployees()
          .then( res => {
        console.log(res.data)
    }      )
          .catch(err => console.log(err));
      }
    

    return(
 <div className="container main">
     <EmpContext.Provider value={employee}>
     <EmployeeList/>
     </EmpContext.Provider>
 </div>
 )
}

export default EmpContainer;