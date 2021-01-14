import React  from "react";
import EmpTable from "./EmpTable";

 

function EmpContainer({filteredEmp}) {



  return (

    <div className="container main">
        <EmpTable filteredEmp={filteredEmp}/>

    </div>
  );
}
export default EmpContainer;
