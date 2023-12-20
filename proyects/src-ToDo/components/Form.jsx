const Form = ({ text, modifyText, addNote }) => {
	return (
		<>
			<form onSubmit={addNote}>
				<input
					value={text}
					placeholder="Enter a text..."
					onChange={modifyText}
				/>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default Form;
