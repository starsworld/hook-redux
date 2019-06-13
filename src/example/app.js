import React from 'react';
import TodoList from "./TodoList";
import TodoInput from './TodoInput'

export default function App() {
    return (
        <div>
            <TodoInput/>
            <TodoList/>
        </div>
    );
}
