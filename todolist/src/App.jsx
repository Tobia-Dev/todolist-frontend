import { useState } from 'react'
import './App.css'
import Todoitem from './components/molecules/TodoItem.jsx';
import TodoForm from './components/organisms/TodoForm.jsx';

function App() {
    const tasks = [
    {titolo: "Task 1", testo: "Fare qualcosa" },
    {titolo: "Task 2", testo: "Fare altro" },
    {titolo: "Task 3", testo: "Ancora altro" },
    {titolo: "Task 4", testo: "Ancora altro" },
  ];
  return (
    <>
      <h1>Demo Bottoni</h1>
      <TodoForm></TodoForm>
      <main>
        {tasks.map((task) =>
          <Todoitem
            titolo={task.titolo}
            testo={task.testo}
          />
        )}
      </main>
    </>
  )
}

export default App
