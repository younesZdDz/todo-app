import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';

function TodoForm({addTodo}){
    const [value, handleChange, reset] = useInputState();
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
        <Paper style={{margin:"1rem 0",  padding: "0 1rem"}}>
            <TextField  value={value} onChange={handleChange} margin='normal' label='Add new todo' fullWidth />
        </Paper>
        </form>
    );

}
export default TodoForm;