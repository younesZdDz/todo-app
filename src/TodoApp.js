import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm'; 

function TodoApp () {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') ||  '[]');
    const [todos, setTodos] = useState(initialTodos);
    useEffect(()=>{
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const addTodo = (todoText) =>{
      setTodos([...todos, {id: uuidv4(), title: todoText, isDone: false}])
    }

    const deleteTodo = (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    }

    const toggleTodo = (todoId) =>{
      const updatedTodos = todos.map((todo) => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo);
      setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTitle) => {
      const updatedTodos = todos.map((todo) => todo.id === todoId ? {...todo, title: newTitle} : todo);
      setTodos(updatedTodos);
    }
    return(
        <Paper style={{
            margin:0,
            padding:0,
            height: '100vh',
            backgroundColor:'#fafafa'
        }}
        elevation={0}>
            <AppBar color="primary" position="static" style={{height: '64px'}}>
            <Toolbar>

                <Typography color="inherit">
                Todo using hooks
                </Typography>
            </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: '1rem'}}>
            <Grid item xs={11} md={8} lg={4}>
              <TodoForm addTodo={addTodo} />
              <TodoList todos={todos} deleteTodo={deleteTodo}  toggleTodo={toggleTodo} editTodo={editTodo} /> 
              </Grid>
            </Grid>
        </Paper>
    );

} 
export default TodoApp;