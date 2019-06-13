// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {createStore} from 'redux';
import reducer from './reducer';
import {create} from '../redux';

export function makeStore() {
    return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE = {
    lastUpdated: 0,
    todos: [
        'Make the fire!',
        'Fix the breakfast!',
        'Wash the dishes!',
        'Do the mopping!',
    ],
};

export const {StoreContext, useDispatch, useMappedState} = create();
