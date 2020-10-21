import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
 export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todos,  dispatch] = useLocalStorageReducer('todos', [], todoReducer);
     return (
        <DispatchContext.Provider value={dispatch}>
         <TodosContext.Provider value={todos} >
                {props.children}
         </TodosContext.Provider>
         </DispatchContext.Provider>
        
     )
} 
