import React, {useCallback} from 'react';
import {useMappedState} from './store';

function TodoItem({index}) {
    const item = useMappedState(
        useCallback((state) => state.todos[index], [index])
    );

    return (
        <div>{item}</div>
    )
}

export default TodoItem;
