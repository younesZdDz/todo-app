import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List' 
import Devider from '@material-ui/core/Divider' 
import Todo from './Todo';

function TodoList ({todos, deleteTodo, toggleTodo, editTodo}){
    return (
        <Paper>
            <List>
            {todos.map(todo => 
            <Fragment key={todo.id}>
                <Todo id={todo.id} title={todo.title} isDone={todo.isDone}  deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                <Devider />
            </Fragment>
            )}
            </List>
        </Paper>
    )
}
export default TodoList;