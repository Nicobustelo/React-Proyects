import Modal from './Modal/Modal.jsx';

const Navbar = ({
	changeNewDescriptionValue,
	changeNewQuestionValue,
	newDescriptionValue,
	newQuestionValue,
	postQuestion,
}) => {
	return (
		<div
			style={{
				background: '#000',
				color: '#fff',
				padding: '1rem',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				textAlign: 'center',
				fontFamily: 'uiserif',
				fontStyle: 'italic',
				fontWeight: 100,
			}}
		>
			<h1 style={{ margin: 0 }}>repensate</h1>
			<Modal
				changeNewDescriptionValue={changeNewDescriptionValue}
				changeNewQuestionValue={changeNewQuestionValue}
				newQuestionValue={newQuestionValue}
				newDescriptionValue={newDescriptionValue}
				postQuestion={postQuestion}
			/>
		</div>
	);
};

export default Navbar;
