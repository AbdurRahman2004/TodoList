import React from 'react';
import ListItems from './listItems';
import "./Style.css"



function TaskList(props) {
    

    return (
        <div className="container">
            <div className="form">
                <input
                    type="text"
                    placeholder="Write Your Task Here"
                    onChange={props.handleChange}
                    value={props.items}
                />
                <button variant="contained" onClick={props.addItems}>
                    <span>Add</span>
                </button>
                <ul style={{textAlign : 'center',marginRight:'30px'}}>
                    {(props.todo.length > 0)?props.todo.map((item, index) => (
                        <ListItems
                            key={index}
                            id={index}
                            index={index}
                            item = {item}
                            onClick={() => props.strike(index)}
                            style={{ textDecoration: item.struck ? 'line-through' : 'none' }}
                            del={props.del}
                        />
                            
                    )) : <p >Set A work to accomplish!</p>}
                </ul>
            </div>
        </div>
    );
}

export default TaskList;
