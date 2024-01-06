import React, { useState } from 'react';
import './Modal.css';

const Modal = ({
	changeNewDescriptionValue,
	changeNewQuestionValue,
	newDescriptionValue,
	newQuestionValue,
	postQuestion,
}) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<>
			<button onClick={toggleModal} className="btn-modal">
				Create
			</button>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content">
						<h2>Create new Question</h2>
						<input
							type="text"
							placeholder="question"
							value={newQuestionValue}
							onChange={changeNewQuestionValue}
						/>{' '}
						<br />
						<input
							type="text"
							placeholder="description"
							value={newDescriptionValue}
							onChange={changeNewDescriptionValue}
						/>
						<br />
						<button onClick={postQuestion}>upload</button>
						<button className="close-modal" onClick={toggleModal}>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
