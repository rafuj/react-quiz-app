import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

	return (
		<main>
			<section className="quiz quiz-small">
				<form className="setup-form" onSubmit={handleSubmit}>
					{/* Amount */}
					<div className="form-control">
						<label htmlFor="amount">Number of Questions</label>
						<input
							type="text"
							className="form-input"
							id="amount"
							name="amount"
							value={quiz.amount}
							onChange={handleChange}
							min={1}
							max={50}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="category">Category</label>
						<select
							name="category"
							id="category"
							className="form-input"
							value={quiz.category}
							onChange={handleChange}
						>
							<option value="sports">Sports</option>
							<option value="history">History</option>
							<option value="politics">Politics</option>
						</select>
					</div>
					<div className="form-control">
						<label htmlFor="difficulty">difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							className="form-input"
							value={quiz.difficulty}
							onChange={handleChange}
						>
							<option value="easy">easy</option>
							<option value="medium">medium</option>
							<option value="hard">hard</option>
						</select>
					</div>
					{error && (
						<p className="error">
							Can't Generate Questions, Please try different options
						</p>
					)}
					<button className="submit-btn" type="submit">
						Start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;
