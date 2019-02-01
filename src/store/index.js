import {createStore} from 'redux';

export const ACTION_TYPES = {
    'ADD_STATEMENT': 0,
    'REMOVE_STATEMENT': 1
};

const initialState = {
    list: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_STATEMENT:
            return Object.assign({}, state, {list: [...state.list, action.value]});
        case ACTION_TYPES.REMOVE_STATEMENT:
            let list = [...state.list];
            list.splice(action.id, 1);

            return Object.assign({}, state, {list});
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;