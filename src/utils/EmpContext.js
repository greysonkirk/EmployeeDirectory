import React from "react";

const EmpContext = React.createContext({
    employees: [],
    order: "ascend",
    filteredUsers: [],
   
});

export default EmpContext;
