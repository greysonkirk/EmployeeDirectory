import React, { useContext } from "react";
import EmpContext from "../utils/EmpContext";

function EmployeeList() {
  const {employees} = useContext(EmpContext);
 
   console.log(employees)
  return (
 
          
            <tr>
              <td>asdgsgf</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>01/22/1989</td>
            </tr>
 
  );
}

export default EmployeeList;
