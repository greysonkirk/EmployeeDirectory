import React, { useContext } from "react";
 
import EmpList from '../components/EmpList'

function EmployeeList() {
 

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
  <EmpList></EmpList>
   
      </tbody>
    </table>
  );
}

export default EmployeeList;
