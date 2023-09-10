import React from "react";


interface HeaderProps
{
    setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ setIsAdding }: HeaderProps) {
  return <div>Header</div>;
}

export default Header;
