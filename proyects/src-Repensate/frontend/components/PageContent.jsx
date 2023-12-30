const PageContent = ({ question, answers }) => {
	return (
		<div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
			<Question question={question} />
			<Answers answers={answers} />
		</div>
	);
};

const Question = ({ question }) => {
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
				<Votes up={question.upVotes} down={question.downVotes} />
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

const Separator = () => {
	return (
		<hr style={{ border: '1px solid #555', width: '100%', margin: '1rem 0' }} />
	);
};

const Answers = ({ answers }) => {
	return (
		<div>
			{answers.map(answer => (
				<div key={answer.id} style={{ marginBottom: '1rem' }}>
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
						<Votes up={answer.upVotes} down={answer.downVotes} />
					</div>
					<h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>
						{answer.answer}
					</h2>
				</div>
			))}
		</div>
	);
};

const Votes = ({ up, down }) => {
	return (
		<div style={{ color: '#ccc', fontSize: '0.8rem', marginRight: '1rem' }}>
			up {up} -- down {down}
		</div>
	);
};

export default PageContent;
