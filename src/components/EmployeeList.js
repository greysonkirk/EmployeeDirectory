import React from "react";

function EmployeeList(props) {
  return (
    <table class="table">
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
        <tr>
          <td>img</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>01/22/1989</td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmployeeList;
