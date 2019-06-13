import React, {useCallback} from 'react';
import TodoItem from "./TodoItem";
import {useMappedState} from './store';

function TodoList() {

    const {todoCount} = useMappedState(
        useCallback((state) => ({
            todoCount: state.todos.length
        }), [])
    );

    return (
        <div>
            {
                new Array(todoCount).fill(null).map((_, index) => (
                    <TodoItem index={index} key={index}/>
                ))
            }
        </div>
    )
}

export default TodoList;
