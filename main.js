const raiting_score_buttons = document.getElementsByClassName("raiting-score");
const raiting_score_ctrl = document.querySelector(".raiting-container");

raiting_score_ctrl.addEventListener("click", (event) => {
  for (const element of raiting_score_buttons) {
    if (element.className == "raiting-score raiting-score-active") {
      element.classList.remove("raiting-score-active");
    }
  }
  if (event.target.className == "raiting-score") {
    event.target.classList.add("raiting-score-active");
  }
});

const sumbit_button = document.querySelector("#sumbit-button");
sumbit_button.addEventListener("click", () => {
  for (const element of raiting_score_buttons) {
    if (element.className == "raiting-score raiting-score-active") {
      const interactive_raiting_container = document.querySelector(
        ".interactive-rating-component"
      );
      const selected_raiting_text = document.querySelector(
        "#selected-raiting-text"
      );
      selected_raiting_text.textContent = `You selected ${element.textContent} out of 5`;
      interactive_raiting_container.classList.toggle("disable-content");
      const thank_you_state_container = document.querySelector(
        ".thank-you-state-container"
      );
      thank_you_state_container.classList.toggle("disable-content");
    }
  }
});
