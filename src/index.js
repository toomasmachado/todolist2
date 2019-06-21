import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList.js'

var destination = document.querySelector("#container");

ReactDOM.render(

    <div>
        <header>
            <h1>TODO LIST DOS BOCOS</h1>
        </header>
        <TodoList/>
    </div>,
    destination
);

