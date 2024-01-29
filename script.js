const questionTogglers = document.querySelectorAll(".faq__question-toggler")
questionTogglers.forEach(toggler => toggler.addEventListener("click", handleQuestionToggle))

function handleQuestionToggle(e){
  const toggler = e.target
  const contentToToggle = document.getElementById(toggler.getAttribute("aria-controls"))
  const iconToAnimate = toggler.querySelector(".faq__question-toggler-icon")
  const toggledState = toggler.getAttribute("aria-expanded") === "true" ? true : false


  contentToToggle.classList.toggle("faq__content-container--active");
  toggler.setAttribute("aria-expanded", toggledState ? false : true);
  iconToAnimate.classList.toggle("faq__question-toggler-icon--active");
}