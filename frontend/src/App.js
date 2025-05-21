import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get('/api/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!task) return;
    await axios.post('/api/todos', { task, completed: false });
    setTask('');
    fetchTodos();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ToDo App</h2>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo.task} - {todo.completed ? "✅" : "❌"}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

