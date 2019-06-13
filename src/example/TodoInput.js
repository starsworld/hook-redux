import React, {useState} from 'react';
import {useDispatch} from './store';

function TodoInput() {

    const [newTodo, setNewTodo] = useState(null);
    const dispatch = useDispatch();

    return (
        <input
            type='text'
            onChange={e => setNewTodo(e.target.value)}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    dispatch({
                        type: 'add todo',
                        todo: newTodo
                    });
                    setNewTodo('');
                }
            }}
            value={newTodo}
        />
    )
}

export default TodoInput;
