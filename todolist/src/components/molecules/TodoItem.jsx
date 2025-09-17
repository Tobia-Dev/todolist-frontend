import { useState } from 'react';
import Button from "../atoms/button.jsx";
import Checkbox from '../atoms/checkbox.jsx';
import Input from '../atoms/input.jsx';
import "./TodoItem.css";

function Todoitem({ id, titolo, testo, onEdit, onDelete,completed, onToggleComplete }) {
    const [checked, setChecked] = useState(false);
    const [createdAt] = useState(new Date());

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(titolo);
    

    return (
        <div className='todo-item'>
            {isEditing ? (
                <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => {
                        onEdit(id, editText);
                        setIsEditing(false);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onEdit(id, editText);
                            setIsEditing(false);
                        }
                    }}
                    autoFocus
                    placeholder="modifica"
                />
            ) : (
                <h2 style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {titolo}
                </h2>
            )}

            <span>{testo}</span>
            <span className="date" >Created: {createdAt.toLocaleString()}</span>
            <Checkbox
                checked={completed}
                onChange={() => onToggleComplete(id)}
            />

            <div>
                <Button onClick={() => setIsEditing(true)}>Modifica</Button>
                <Button onClick={() => onDelete(id)}>Elimina</Button>
            </div>
        </div>
        
    );
}

export default Todoitem