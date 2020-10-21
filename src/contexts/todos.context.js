import React, { createContext } from 'react';
import useTodosState from '../hooks/useTodosState'

export const TodosContext = createContext();

export function TodosProvider(props){
    const todosStuff = useTodosState();
     return (
         <TodosContext.Provider value={todosStuff}>
             {props.children}
         </TodosContext.Provider>
     )
} 
