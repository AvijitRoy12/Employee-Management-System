import React from 'react'
import employeesData from '../../data';

interface ListProps {
  employees: React.Dispatch<React.SetStateAction<typeof employeesData>>;
}

function List({employees}: ListProps) {
  return (
    <div>List</div>
  )
}

export default List