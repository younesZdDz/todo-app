import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function TodoEditForm({id, title, editTodo, toggle}) {
    const [value, handleChange, reset] = useInputState(title);
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggle();
            
        }}
        style={{marginLeft: '1rem', width: '100%'}}
        >
        <TextField  value={value} onChange={handleChange} margin='normal' fullWidth autoFocus/>
        </form>
        );
}
export default TodoEditForm;