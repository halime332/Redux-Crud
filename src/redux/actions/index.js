import { ADD, DELETE, UPDATE } from "../actionTypes";

export const addTodo = (payload) => {
    return { type: ADD, payload };
};
export const deleteTodo = (payload) => {
    return { type: DELETE, payload };
};
export const updateTodo = (payload) => {
    return { type: UPDATE, payload };
};