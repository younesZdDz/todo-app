import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List' 
import Devider from '@material-ui/core/Divider' 
import Todo from './Todo';

function TodoList ({todos}){
    return (
        <Paper>
            <List>
            {todos.map(todo => 
            <>
                <Todo title={todo.title} isDone={todo.isDone} />
                <Devider />
            </>
            )}
            </List>
        </Paper>
    )
}
export default TodoList;