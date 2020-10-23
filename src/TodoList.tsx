import React from 'react';
import './App.css';

export type TodoListPropsType = {

}

export const TodoList = function(props: TodoListPropsType) {
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/><span>HTML & CSS</span></li>
                <li><input type="checkbox" checked={false}/><span>JavaScript</span></li>
                <li><input type="checkbox" checked={true}/><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}