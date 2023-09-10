import React from "react";
import employeesData from "../../data";

/**
 * Alias for the type of function
 */
type functionType = React.Dispatch<React.SetStateAction<boolean>>;

interface ListProps {
  employees: React.Dispatch<React.SetStateAction<typeof employeesData>>;
  handleEdit?: functionType;
  handleDelete?: functionType;
}

function List({ employees, handleEdit, handleDelete }: ListProps) {
  return <div>List</div>;
}

export default List;
