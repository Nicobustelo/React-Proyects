import Subtitle from './Subtitle';

const List = ({ list, deleteTarea, toggleState }) => {
	const finishedTasks = list.filter(tarea => tarea.estado);
	const todoTasks = list.filter(tarea => !tarea.estado);

	return (
		<div>
			<Subtitle text="ToDo" />
			<ul>
				{todoTasks.map(tarea => (
					<li key={tarea.id}>
						{tarea.content}{' '}
						<button onClick={() => deleteTarea(tarea.id)}>X</button>
						<button onClick={() => toggleState(tarea.id)}>
							mark as finished
						</button>
					</li>
				))}
			</ul>
			<Subtitle text="Finished" />
			<ul>
				{finishedTasks.map(tarea => (
					<li key={tarea.id}>
						{tarea.content}{' '}
						<button onClick={() => deleteTarea(tarea.id)}>X</button>
						<button onClick={() => toggleState(tarea.id)}>mark as ToDo</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
