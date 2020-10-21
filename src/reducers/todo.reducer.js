import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {

    switch(action.type){
        case 'ADD':
            return [...state, {id: uuidv4(), title: action.todoText, isDone: false}];
        case 'DELETE':
            return state.filter((todo) => todo.id !== action.todoId);
        case 'TOGGLE':
            return state.map((todo) => todo.id === action.todoId ? {...todo, isDone: !todo.isDone} : todo);
        case 'EDIT':
            return state.map((todo) => todo.id === action.todoId ? {...todo, title: action.newTitle} : todo);
        default:
            return state
    }
}

export default reducer;