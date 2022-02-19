import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Modal from "./Modal";
import SetupForm from "./SetupForm";

function App() {
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		nextQuestion,
		checkAnswer,
	} = useGlobalContext();

	if (waiting) return <SetupForm />;

	if (loading)
		return (
			<>
				<Loading />
			</>
		);
	const { question, incorrect_answers, correct_answer } = questions[index];
	let answers = [...incorrect_answers];

	const tempIndex = Math.floor(Math.random() * 4);

	if (tempIndex === 3) {
		answers.push(correct_answer);
	} else {
		answers.push(answers[tempIndex]);
		console.log(answers);
		answers[tempIndex] = correct_answer;
		console.log(answers);
	}

	return (
		<>
			<Modal />
			<main>
				<section className="quiz">
					<p className="correct-answers">
						Correct answers : {correct} / {index}
					</p>
					<article className="container">
						<h2 dangerouslySetInnerHTML={{ __html: question }} />
						<div className="btn-container">
							{answers.map((answer, index) => (
								<button
									key={index}
									className="answer-btn"
									onClick={() =>
										checkAnswer(correct_answer === answer)
									}
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							))}
						</div>
					</article>
					<button
						className="next-question"
						onClick={() => nextQuestion(index)}
					>
						Next Questions
					</button>
				</section>
			</main>
		</>
	);
}

export default App;
