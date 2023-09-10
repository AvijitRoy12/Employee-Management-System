import React from "react";

type functionType = React.Dispatch<React.SetStateAction<boolean>>;
interface HeaderProps {
  setIsAdding: functionType;
}

function Header({ setIsAdding }: HeaderProps) {
  return <div>Header</div>;
}

export default Header;
