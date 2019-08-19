import { ADD_TODO, RESET_TODO, FILTER_TODO } from '../actions/action-types';

const initialState = {
    todos: []
}
console.log(initialState)

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case FILTER_TODO:
            return { ...state, todos: [...state.todos.filter(item => item.id !== action.payload)] }
        case RESET_TODO: 
            return {...state, todos:[]}
        default:
            return state
    }
}

export default rootReducer;