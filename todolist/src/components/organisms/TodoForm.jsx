import { useState } from 'react';
import Button from "../atoms/button.jsx";
import Input from '../atoms/input.jsx';
import "./TodoForm.css"

function TodoForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (!text.trim()) return; // evita task vuoti
        onAdd(text);              // passa il testo all'App
        setText("");              // svuota input
    };

    return (
        <div className='todo-form'>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Scrivi un task..."
            />
            <Button onClick={handleAdd}>Aggiungi Task</Button>
        </div>
    );
}

export default TodoForm