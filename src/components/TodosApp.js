import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodosList';
import TodoForm from './TodoForm';
import { TodosProvider } from '../contexts/todos.context';

function TodosApp() {
	return (
		<Paper
			style={{
				margin: 0,
				padding: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar
				color="primary"
				position="static"
				style={{ height: '64px' }}
			>
				<Toolbar>
					<Typography color="inherit">Todo using hooks</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}
export default TodosApp;
