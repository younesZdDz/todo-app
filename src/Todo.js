
import React from 'react'; 
import ListItem from '@material-ui/core/ListItem' ;
import ListItemText from '@material-ui/core/ListItemText' ;
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useToggle from './hooks/useToggle';
import TodoEditForm from './TodoEditForm'

function Todo({id, title, isDone, deleteTodo, toggleTodo, editTodo}){
    const [isEditing, toggle] = useToggle();
    return (
        <ListItem>
            {isEditing ? 
            <TodoEditForm  id={id} title={title} editTodo={editTodo} toggle={toggle}/> : 
            <>
            <Checkbox tabIndex={-1} checked={isDone} onClick={() => { toggleTodo(id) }}/>
            <ListItemText style={{textDecoration: isDone ? 'line-through' : 'none'}}>{title}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit' onClick={toggle}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete'  onClick={()=>{ deleteTodo(id) }}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    );
}
export default Todo;