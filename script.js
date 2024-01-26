const questionTogglers = document.querySelectorAll(".faq__question-toggler")
questionTogglers.forEach(toggler => toggler.addEventListener("click", handleQuestionToggle))

function handleQuestionToggle(e){
  const toggler = e.target
  const contentToToggle = document.getElementById(toggler.getAttribute("aria-controls"))
  const iconToAnimate = toggler.querySelector(".faq__question-toggler-icon")
  const toggledState = toggler.getAttribute("aria-expanded") === "true" ? true : false


  if(toggledState) {
    contentToToggle.classList.remove("faq__content-container--active");
    toggler.setAttribute("aria-expanded", false)
    iconToAnimate.classList.remove("faq__question-toggler-icon--active")
  }
  else {
    contentToToggle.classList.add("faq__content-container--active");
    toggler.setAttribute("aria-expanded", true)
    iconToAnimate.classList.add("faq__question-toggler-icon--active")
  }
}