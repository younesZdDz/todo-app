import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import useInputState from '../hooks/useInputState';
import { DispatchContext } from '../contexts/todos.context';

function TodoEditForm({ id, title, toggle }) {
	const dispatch = useContext(DispatchContext);
	const [value, handleChange, reset] = useInputState(title);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDIT', todoId: id, newTitle: value });
				reset();
				toggle();
			}}
			style={{ marginLeft: '1rem', width: '100%' }}
		>
			<TextField
				value={value}
				onChange={handleChange}
				margin="normal"
				fullWidth
				autoFocus
			/>
		</form>
	);
}

TodoEditForm.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	toggle: PropTypes.func.isRequired
};

export default TodoEditForm;
