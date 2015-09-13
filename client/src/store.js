import { createStore } from 'redux';

import rootReducer from './reducers/template';

export function configureStore() {
    const initialState = {
    };

    return createStore(rootReducer, initialState);
}
