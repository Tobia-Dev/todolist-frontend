import { useState } from 'react'
import './App.css'
import Todoitem from './components/molecules/TodoItem.jsx';
import TodoForm from './components/organisms/TodoForm.jsx';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, titolo: "Task 1", testo: "Fare qualcosa" },
    { id: 2, titolo: "Task 2", testo: "Fare altro" },
    { id: 3, titolo: "Task 3", testo: "Fare altro" },
    { id: 4, titolo: "Task 4", testo: "Fare altro" },
  ]);

  const [nextId, setNextId] = useState(tasks.length + 1);

  const addTask = (text) => {
    const newTask = {
      id: nextId,
      titolo: text,
      testo: "Da fare",
      createdAt: new Date()
    };

    setTasks([...tasks, newTask]);
    setNextId(nextId + 1); // incrementa contatore
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, titolo: newTitle } : task
    ));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      <h1>To do List</h1>
      <TodoForm onAdd={addTask} />
      <main>
        {tasks.map((task) =>
          <Todoitem
            id={task.id}
            titolo={task.titolo}
            testo={task.testo}
            onEdit={editTask}
            completed={task.completed || false}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        )}
      </main>
      <div style={{ marginTop: '20px' }}>
        <span>Completati: {tasks.filter(t => t.completed).length} / {tasks.length}</span>
      </div>
    </>
  )
}

export default App
