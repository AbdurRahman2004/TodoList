import {useState} from "react";
import './App.css';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';
import React from 'react';


function App() {
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
       <div>
       <Header />
       <Content 
       items={items}
       todo={todo}
       addItems={addItems}
       handleChange={handleChange}
       strike={strike}
       del={del}
       />
       <Footer />
       </div>
  )
}

export default App;
