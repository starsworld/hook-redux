import React from 'react';
import {makeStore, StoreContext} from './store';
import App from './app';

const store = makeStore();

const Example = (
    <StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>
);

export default Example;
