import { ADD_TODO, RESET_TODO, FILTER_TODO } from './action-types';

export function addTodo (payload) {
    return { type: ADD_TODO, payload }
}
export function resetTodo() {
    return { type: RESET_TODO }
}
export function filterTodo(payload) {
    return { type: FILTER_TODO, payload }
}