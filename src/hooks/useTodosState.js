
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useTodosState(initialTodos) {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: (todoText) =>{
            setTodos([...todos, {id: uuidv4(), title: todoText, isDone: false}])
        },
      
        deleteTodo: (todoId) => {
            const updatedTodos = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatedTodos);
        },

        toggleTodo: (todoId) =>{
            const updatedTodos = todos.map((todo) => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo);
            setTodos(updatedTodos);
        },
      
        editTodo: (todoId, newTitle) => {
            const updatedTodos = todos.map((todo) => todo.id === todoId ? {...todo, title: newTitle} : todo);
            setTodos(updatedTodos);
        }
    }

}
export default useTodosState;