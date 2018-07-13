import React from 'react';

const AdminTable = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
    </tr>
  )
}

export default AdminTable;


