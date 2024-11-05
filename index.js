const btnEl = document.getElementById("btn");
const weightConditionEl = document.getElementById("weight-condition");

btnEl.addEventListener("click", () => {
  const bmiResult = document.getElementById("bmi-result");
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmi = weightValue / (heightValue * heightValue);

  bmiResult.value = bmi;

  if (bmi < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmi >= 30) {
    weightConditionEl.innerText = "Obesity";
  }

  if (bmi < 18.5) {
    weightConditionEl.style.color = "red";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightConditionEl.style.color = "lightgreen";
  } else if (bmi >= 25 && bmi <= 29.9) {
    weightConditionEl.style.color = "orange";
  } else if (bmi >= 30) {
    weightConditionEl.style.color = "black";
  }
});
