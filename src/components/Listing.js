import React from 'react';

function Listing(props) {  

  const taskList = props.tasks.map((task, i) => {
    return (
      <tr key={i}>
        <td>{task.name}</td>
        <td>{task.totalCost}</td>
        <td>{task.amountReceived}</td>
        <td>{task.pendingAmount}</td>
      </tr>
    )
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Name:</th>
          <th>Total Cost:</th>
          <th>Amount Received:</th>
          <th>Pending Amount:</th>
        </tr>
        {taskList}
      </tbody>
    </table>
  );
}

export default Listing;
