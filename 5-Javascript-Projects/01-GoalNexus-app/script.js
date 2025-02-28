const inputTexts = document.querySelectorAll(".input");

const checkBoxList = document.querySelectorAll(".custom-checkbox");

const setGoalText = document.querySelector(".set-goals-text");

const goalValue = document.querySelector(".goal-value");

const barText = document.querySelector(".bar-text");


const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Wow! You just completed all the goals, time for chill :D"
]

const allInputs = JSON.parse(localStorage.getItem("allInputsObj")) || {
  first: {
    text: "",
    completed: false
  },
  second: {
    text: "",
    completed: false
  },
  third: {
    text: "",
    completed: false
  },
};

let allCompletedVal = Object.values(allInputs).filter((element) => {
  return element.completed == true;
}).length;

goalValue.style.width = `${allCompletedVal/inputTexts.length * 100}%`;
goalValue.firstElementChild.innerText = `${allCompletedVal}/${inputTexts.length}Completed`;

barText.innerText = allQuotes[allCompletedVal];


checkBoxList.forEach((checkbox) => {

  checkbox.addEventListener("click", (e) => {

    const AllinputTextsValue = [...inputTexts].every((input) => {
      return input.value;
    });

    if (AllinputTextsValue) {
      checkbox.parentElement.classList.toggle("completed");

      allInputs[checkbox.nextElementSibling.id].completed = !allInputs[checkbox.nextElementSibling.id].completed;

      allCompletedVal = Object.values(allInputs).filter((element) => { return element.completed == true;}).length;

      goalValue.style.width = `${allCompletedVal/inputTexts.length * 100}%`;

      goalValue.firstElementChild
    .innerText = `${allCompletedVal}/${inputTexts.length}Completed`;

    barText.innerText = allQuotes[allCompletedVal];

      localStorage.setItem("allInputsObj", JSON.stringify(allInputs));
    }
    else {
      setGoalText.innerText = `Please set all the ${inputTexts.length} goals!`
      setGoalText.classList.add("set-goal-error");

      inputTexts.forEach((input) => {
        input.addEventListener("focus", (e) => {
          setGoalText.classList.remove("set-goal-error");
        });
      });
    }
  });
});


inputTexts.forEach((input) => {

  input.value = allInputs[input.id].text;

  if (allInputs[input.id].completed) {
    input.parentElement.classList.add("completed");
  }


  input.addEventListener("input", (e) => {
    if (allInputs[input.id].completed) {
      input.value = allInputs[input.id].text;
      return
    }

    allInputs[input.id].text = e.target.value;
  
    localStorage.setItem("allInputsObj", JSON.stringify(allInputs));
  });
});

