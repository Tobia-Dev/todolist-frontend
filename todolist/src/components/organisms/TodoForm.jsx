import { useState } from 'react';
import Button from "../atoms/button.jsx";
import Input from '../atoms/input.jsx';
import "./TodoForm.css"

function TodoForm({ titolo, testo }) {
    const [checked, setChecked] = useState(false);
    const [createdAt] = useState(new Date());

    return (
        <div className='todo-form'>
            <Input></Input>
            <Button>
                Aggiungi Task
            </Button>
        </div>
    );
}

export default TodoForm