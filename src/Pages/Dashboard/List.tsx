import React from "react";
import employeesData from "../../data";

/**
 * Alias for the type of function
 */
type functionType = React.Dispatch<React.SetStateAction<Function>>;

interface ListProps {
  employees: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    salary: number;
    date: string;
  }[];
  handleEdit?: functionType;
  handleDelete?: functionType;
}

function List({ employees, handleEdit, handleDelete }: ListProps) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date}</td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
