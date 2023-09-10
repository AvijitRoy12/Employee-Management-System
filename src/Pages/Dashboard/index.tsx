import React, { useState } from "react";
import Swal from "sweetalert2";

import employeesData from "../../data";

import Add from "./Add";
import List from "./List";
import Edit from "./Edit";
import Header from "./Header";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, seIsEditing] = useState(false);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={setEmployees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}

export default Dashboard;
