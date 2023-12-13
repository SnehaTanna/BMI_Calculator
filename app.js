const heightInput = document.querySelector("#user-height");
const weightInput = document.querySelector("#user-weight");
const btn = document.querySelector("#enter");
const output = document.querySelector("#output");
const bmiOutput = document.querySelector("#bmi");
const msgOutput = document.querySelector("#output-msg");

const calculateBMI = (height, weight) => {
  const bmi = weight / (height * height);
  return bmi;
};

const displayOutput = () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  if (height <= 0 || weight <= 0) {
    bmiOutput.innerText = "Please enter proper credentials.";
    return;
  }
  bmi = calculateBMI(height, weight);
  bmiOutput.innerText = `Your BMI is: ${bmi}`;
  if (bmi < 18.5) {
    msgOutput.innerText = "You are Underweight! Eat healthy and gain weight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    msgOutput.innerText =
      "You are Normalweight :) Continue eating healthy like this only!";
  } else if (bmi >= 25 && bmi <= 29.9) {
    msgOutput.innerText =
      "You are Overweight! Start eating more protein and do exercise";
  } else {
    msgOutput.innerText = "You are suffering with Obesity. Visit your doctor.";
  }
  output.classList.remove("hide");
};

btn.addEventListener("click", displayOutput);
