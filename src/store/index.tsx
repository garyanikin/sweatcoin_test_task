import {createStore} from 'redux';

export enum ACTION_TYPES {
    ADD_STATEMENT,
    REMOVE_STATEMENT,
    SORT_LIST
};

interface Action {
    type: ACTION_TYPES,
    value: any,
    list: any,
    id: number
}

const initialState = {
    list: []
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_STATEMENT: {
            let list = [...state.list, action.value];

            return {
                ...state,
                list
            };
        }
        case ACTION_TYPES.REMOVE_STATEMENT: {
            let list = [...state.list];
            list.splice(action.id, 1);

            return {
                ...state,
                list
            }
        }
        case ACTION_TYPES.SORT_LIST: {
            return {
                ...state,
                list: action.list
            }
        }
        default: {
            return state;
        }
    }
};

const store = createStore(reducer);

export default store;