import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List' 
import Devider from '@material-ui/core/Divider' 
import Todo from './Todo';
import emptyImage from './assets/imgs/empty.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TodoList ({todos, deleteTodo, toggleTodo, editTodo}){
    return (
        <Paper justify="center">
            {todos.length > 0 ? 
                <List>
                {todos.map((todo, i) => 
                <Fragment key={todo.id}>
                    <Todo id={todo.id} title={todo.title} isDone={todo.isDone}  deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                    {i < todos.length - 1 && <Devider />}
                </Fragment>
                ) }
                </List> : 
                <div style={{width:'40%', height: 'auto', margin: 'auto', paddingBottom:'1rem'}}>
                    <img src={emptyImage} alt='empty todos' style={{width:'100%', height: 'auto'}}/>
                    <Typography align='center' ><Box fontWeight='fontWeightBold'>Empty todos !</Box></Typography>
                </div>
                }
        </Paper>
    )
}
export default TodoList;