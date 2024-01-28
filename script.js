import { questions } from './questions.js';

const joinClassNames = (...classNames) =>
	classNames.filter((className) => className).join(' ');

const questionsContainer = document.querySelector('.faq__questions-list');

questions.forEach((question, i) => {
	const questionHTML = `
		<li class="faq__question">
			<button
				class="faq__question-toggler"
				aria-expanded="${i === 0}"
				aria-controls="content-container-${i}"
				id="accordion-btn-${i}"
			>
				<img
					src="icons/chevron.svg"
					alt=""
					class="${joinClassNames('faq__question-toggler-icon', i === 0 && 'faq__question-toggler-icon--active')}"
				/>
				<span class="faq__question-toggler-text">${question.title}<span>
			</button>
			<div
				class="${joinClassNames('faq__content-container', i === 0 && 'faq__content-container--active')}"
				aria-labelledby="accordion-btn-${i}"
				id="content-container-${i}"
			>
				<div class="faq__content">
					<p class="faq__content-text">
						${question.content}
					</p>
				</div>
			</div>
		</li>
	`;
	questionsContainer.innerHTML += questionHTML;
});

const questionTogglers = document.querySelectorAll('.faq__question-toggler');
questionTogglers.forEach((toggler) =>
	toggler.addEventListener('click', handleQuestionToggle)
);

function handleQuestionToggle(e) {
	const toggler = e.target;
	const contentToToggle = toggler.nextElementSibling;
	const iconToAnimate = toggler.firstElementChild;
	const toggledState = toggler.getAttribute('aria-expanded') === "true";

	contentToToggle.classList.toggle('faq__content-container--active');
	toggler.setAttribute('aria-expanded', "" + !toggledState);
	iconToAnimate.classList.toggle('faq__question-toggler-icon--active');
}
