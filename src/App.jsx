import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData([...data, task]);
    setTask('');
  };

  const deleteTask = (deleteTask) => {
    data.filter((tasks) => tasks !== deleteTask);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleClick}>add task</button>
      <div>
        {data.map((name, id) => {
          return (
            <li key={id}>
              {name}
              <button></button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
