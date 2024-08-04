import React from "react";
import { DeleteOutlined } from '@ant-design/icons';
import "./Style.css"

function ListItems(props){
    return (
        <li
            key={props.key}
            id={props.id}
            onClick={props.onClick}
            style={{ textDecoration: props.item.struck ? 'line-through' : 'none' }}
        >
            {props.item.text}

            <DeleteOutlined className='btn' onClick={(e) => { e.stopPropagation(); props.del(props.index); }} />

        </li>
    );
}
export default ListItems;