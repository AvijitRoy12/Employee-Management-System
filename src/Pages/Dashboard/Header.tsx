import React from "react";

type functionType = React.Dispatch<React.SetStateAction<boolean>>;
interface HeaderProps {
  setIsAdding: functionType;
}

function Header({ setIsAdding }: HeaderProps) {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div>
        <button className="round-button" onClick={() => setIsAdding(true)}>
          Add employee
        </button>
      </div>
    </header>
  );
}

export default Header;
