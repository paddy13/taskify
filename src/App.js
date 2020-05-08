import React, { useState } from 'react';
import Listing from './components/Listing';
import InputField from './utils/InputField';

function App() {
  const [taskName, setTaskName] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [amountReceived, setAmountReceived] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (parseInt(totalCost) < parseInt(amountReceived))
      return alert('Amount received cannot be more than total cost');

    if (!taskName)
      return alert('Task description required');

    const task = {
      name: taskName,
      totalCost: totalCost,
      amountReceived: amountReceived,
      pendingAmount: (totalCost - amountReceived),
      complete: false
    }

    setTasks([...tasks, task]);
    setTaskName('');
    setTotalCost(0);
    setAmountReceived(0);
  }

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Taskify</h1> <br/>
      <div>
        Task:
        <InputField value={taskName} type='text' placeholder='Add task description' onChange={(e) => setTaskName(e.target.value)} />

        Total Cost:
        <InputField value={totalCost} type='number' placeholder='Total cost (digits only)' onChange={(e) => setTotalCost(e.target.value)} />

        Amount Received:
        <InputField value={amountReceived} type='number' placeholder='Amount Received (digits only)' onChange={(e) => setAmountReceived(e.target.value)} />

        <button onClick={() => addTask()} >
          Add Task
        </button>

        <Listing tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
