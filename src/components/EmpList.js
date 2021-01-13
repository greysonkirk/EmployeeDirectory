import React  from "react";
 

function EmployeeList() {
 

  return (
    <>
      {employees.map(employee =>      <tr>
      <td><img className="img-thumbnail"src={employee.picture.thumbnail} alt="person" key={employee.login.uuid}></img></td>
      <td>{employee.name.first +" "+ employee.name.last} </td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.dob.date}</td>
    </tr>)}
    </>
 
  );
}

export default EmployeeList;
