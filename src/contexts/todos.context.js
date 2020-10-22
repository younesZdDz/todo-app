import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
// eslint-disable-next-line import/no-named-as-default-member
import todoReducer from '../reducers/todo.reducer';
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	const [todos, dispatch] = useLocalStorageReducer('todos', [], todoReducer);
	return (
		<DispatchContext.Provider value={dispatch}>
			<TodosContext.Provider value={todos}>
				{props.children}
			</TodosContext.Provider>
		</DispatchContext.Provider>
	);
}

TodosProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};
