import { useState } from 'react';
import Button from "../atoms/button.jsx";
import Checkbox from '../atoms/checkbox.jsx';

import "./TodoItem.css";

function Todoitem({ titolo, testo }) {
    const [checked, setChecked] = useState(false);
    const [createdAt] = useState(new Date());

    const handleDelete = () => {
        alert("Hai cliccato Elimina!");
    };

    return (
        <div className='todo-item'>
            <h2>{titolo}</h2>
            <span className="testo">{testo}</span>
            <span className="date" >Created: {createdAt.toLocaleString()}</span>
            <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <div>
                <Button onClick={handleDelete}>Modifica</Button>
                <Button onClick={handleDelete}>Elimina</Button>
            </div>
        </div>
    );
}

export default Todoitem