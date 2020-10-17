
import React from 'react'; 
import ListItem from '@material-ui/core/ListItem' ;
import ListItemText from '@material-ui/core/ListItemText' ;
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({id, title, isDone}){

    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={isDone} />
            <ListItemText style={{textDecoration: isDone ? 'line-through' : 'none'}}>{title}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete'>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
export default Todo;