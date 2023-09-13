import React, { useEffect, useRef, useState } from "react";
import employeesData from "../../data";

type EmployeesData = typeof employeesData;

interface addProps {
  employees: EmployeesData;
  setEmployees: React.Dispatch<React.SetStateAction<typeof employeesData>>;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

function Add({ setEmployees, setIsAdding, employees }: addProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const handleAdd = () => {
    //TODO
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstNmae"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Add;
