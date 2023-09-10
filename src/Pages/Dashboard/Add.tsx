import React from "react";
import employeesData from "../../data";

type EmployeesData = typeof employeesData;

interface addProps {
  employees: EmployeesData;
  setEmployees: React.Dispatch<React.SetStateAction<typeof employeesData>>;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

function Add({ setEmployees, setIsAdding, employees }: addProps) {
  return <div>Add</div>;
}

export default Add;
