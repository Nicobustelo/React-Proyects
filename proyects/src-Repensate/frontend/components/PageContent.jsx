const PageContent = ({
	question,
	answers,
	comment,
	commentChangeHandler,
	commentPostHandler,
	upButton,
	downButton,
}) => {
	return (
		<div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
			<Question
				question={question}
				upButton={upButton}
				downButton={downButton}
			/>
			<Comment
				comment={comment}
				commentChangeHandler={commentChangeHandler}
				commentPostHandler={commentPostHandler}
			/>
			<Answers answers={answers} upButton={upButton} downButton={downButton} />
		</div>
	);
};

const Question = ({ question, upButton, downButton }) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: '0.5rem',
				}}
			>
				<h4 style={{ marginRight: '0.5rem', color: '#fff' }}>
					{question.user}
				</h4>
				<Votes
					id={question.id}
					qoa={1}
					up={question.upVotes}
					down={question.downVotes}
					upButton={upButton}
					downButton={downButton}
				/>
			</div>
			<h1 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '40px' }}>
				{question.question}
			</h1>
			<h3 style={{ color: '#ccc', marginBottom: '1rem' }}>
				{question.description}
			</h3>
		</>
	);
};

const Comment = ({ comment, commentChangeHandler, commentPostHandler }) => {
	return (
		<div>
			<input
				style={{ width: '90%' }}
				onChange={commentChangeHandler}
				type="text"
				value={comment}
			/>
			<button onClick={commentPostHandler}>comment</button>
		</div>
	);
};

const Separator = () => {
	return (
		<hr style={{ border: '1px solid #555', width: '100%', margin: '1rem 0' }} />
	);
};

const Answers = ({ answers, upButton, downButton }) => {
	return (
		<div>
			{answers.map(answer => (
				<div key={answer.id} style={{ marginBottom: '1rem' }}>
					<Answer answer={answer} upButton={upButton} downButton={downButton} />
				</div>
			))}
		</div>
	);
};

const Answer = ({ answer, upButton, downButton }) => {
	return (
		<>
			<br />
			<Separator />
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: '0.5rem',
				}}
			>
				<h4
					style={{
						marginRight: '0.5rem',
						color: '#fff',
					}}
				>
					{answer.user}
				</h4>
				<Votes
					id={answer.id}
					qoa={2}
					up={answer.upVotes}
					down={answer.downVotes}
					upButton={upButton}
					downButton={downButton}
				/>
			</div>
			<h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>{answer.answer}</h2>
		</>
	);
};

const Votes = ({ id, qoa, up, down, upButton, downButton }) => {
	return (
		<div style={{ color: '#ccc', fontSize: '0.8rem', marginRight: '1rem' }}>
			<button onClick={() => upButton(id, qoa)}>up</button> {up} --{' '}
			<button onClick={() => downButton(id, qoa)}>down</button> {down}
		</div>
	);
};

export default PageContent;
