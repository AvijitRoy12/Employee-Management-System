import React, { useState } from "react";
import Swal from "sweetalert2";

import employeesData from "../../data";

import Add from "./Add";
import List from "./List";
import Edit from "./Edit";
import Header from "./Header";

/**
 * Dashboard component
 */
function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id: number) => {
    console.log("Edit id", id);
  };
  const handleDelete = (id: number) => {
    console.log("Delete id", id);
  };

  return (
    <div className="container">
      {/** Employee list view */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/** Employee adding view */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/** Employee editing view */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployee={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export  {Dashboard};
