import { useState } from 'react';

const Title = ({ text }) => {
	return (
		<>
			<h1>{text}</h1>
		</>
	);
};

const Clock = props => {
	const [hours, mins, secs] = props.time;
	const boolean = props.boolean;

	if (boolean === 0) {
		return (
			<>
				<h1>
					{hours}:{mins}:{secs}
				</h1>
			</>
		);
	} else {
		if (hours > 12) {
			return (
				<>
					<h1>
						{hours - 12}:{mins}:{secs} PM
					</h1>
				</>
			);
		} else {
			return (
				<>
					<h1>
						{hours}:{mins}:{secs} AM
					</h1>
				</>
			);
		}
	}
};

const Fecha = props => {
	let [dia, mes, numero, año] = props.fecha;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const dayNames = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	dia = dayNames[dia];
	mes = monthNames[mes];

	return (
		<>
			<h2>
				{dia}, {mes} {numero}th {año}
			</h2>
		</>
	);
};

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
	const [fecha, setFecha] = useState([
		new Date().getDay(),
		new Date().getMonth(),
		new Date().getDate(),
		new Date().getFullYear(),
	]);

	const [time, setTime] = useState([
		new Date().getHours(),
		new Date().getMinutes(),
		new Date().getSeconds(),
	]);

	const [boolean, setBoolean] = useState(0);

	setTimeout(() => {
		setTime([
			new Date().getHours(),
			new Date().getMinutes(),
			new Date().getSeconds(),
		]);
		if (time == [0, 0, 0]) {
			setFecha([
				new Date().getDay(),
				new Date().getMonth(),
				new Date().getDate(),
				new Date().getFullYear(),
			]);
		}
	}, 1000);

	const changeFormat = () => {
		if (boolean === 0) {
			setBoolean(1);
		} else {
			setBoolean(0);
		}
	};

	return (
		<div>
			<Title text="A Simple Digital Clock" />
			<Clock time={time} boolean={boolean} />
			<Fecha fecha={fecha} />
			<Button handleClick={changeFormat} text="Change Format" />
		</div>
	);
};

export default App;
