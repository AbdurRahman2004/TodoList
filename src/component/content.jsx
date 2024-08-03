import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import "./Style.css"



function TaskList() {
    const [items, setItems] = useState("");
    const [todo, setTodo] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setItems(value);
    }

    function addItems() {
        if (items.trim()) { // Check if input is not empty or just whitespace
            setTodo(prev => ([...prev, { text: items, struck: false }]));
            setItems("");
        }
    }

    function strike(index) {
        setTodo(prev => 
            prev.map((item, i) => 
                i === index ? { ...item, struck: !item.struck } : item
            )
        );
    }

    function del(index) {
        setTodo(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="container">
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Write Your Task Here" 
                    onChange={handleChange} 
                    value={items} 
                />
                <button variant="contained" onClick={addItems}>
                    <span>Add</span>
                </button>
                <ul>
                    {todo.map((item, index) => (
                        <li 
                            key={index} 
                            id={index} 
                            onClick={() => strike(index)} 
                            style={{ textDecoration: item.struck ? 'line-through' : 'none' }}
                        >
                            {item.text}  
                            
                                <DeleteOutlined  className='btn' onClick={(e) => { e.stopPropagation(); del(index); }} />
                             
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskList;
