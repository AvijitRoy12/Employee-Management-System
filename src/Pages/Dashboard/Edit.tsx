import React from "react";
import employeesData from "../../data";

type EmployeesData = typeof employeesData;
type FunctionType = React.Dispatch<React.SetStateAction<Function>>;

interface editProps {
  employees: EmployeesData;
  selectedEmployee: null | EmployeesData;
  setEmployee: React.Dispatch<React.SetStateAction<typeof employeesData>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function Edit({
  employees,
  selectedEmployee,
  setEmployee,
  setIsEditing,
}: editProps) {
  return <div>Edit</div>;
}

export default Edit;
