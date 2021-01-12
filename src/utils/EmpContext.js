import React from "react";

const EmpContext = React.createContext({
  name: "",
  phone: "",
  email: "",
  dob: "",
  img: "",
  handleBtnClick: () => {}
});

export default EmpContext;
