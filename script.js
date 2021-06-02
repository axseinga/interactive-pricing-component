// Slider color change //

const slider = document.getElementById("sliderRange");
const output = document.getElementById("demo");
const price = document.getElementById("price");
const views = document.getElementById("views");
const checkbox = document.getElementById("checkbox");
output.innerHTML = slider.value;

let isChecked = false;
let sliderValue = slider.value;
const multiply = 0.75;

checkbox.addEventListener("click", () => {
  isChecked = checkbox.checked; // !isChecked
  checkValue();
});

function updateGradient(rangeValue) {
  const percentage =
    ((rangeValue - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) ${percentage}%, hsl(224, 65%, 95%) ${percentage}%)`;
}

// Update gradient onload
updateGradient(slider.value);

slider.addEventListener("input", (e) => {
  // Update gradient oninput
  output.innerHTML = e.target.value;
  sliderValue = slider.value;
  checkValue();
  updateGradient(e.target.value);
});

const checkPrice = (value) => {
  let valueToString = value.toString();
  const price = {
    0: 8,
    25: 12,
    50: 16,
    75: 24,
    100: 36,
  };
  return price[valueToString.toLowerCase()];
};

const checkViews = (value) => {
  let valueToString = value.toString();
  const views = {
    0: "10K",
    25: "50K",
    50: "100K",
    75: "500K",
    100: "1M",
  };
  return views[valueToString.toLowerCase()];
};

const checkValue = () => {
  views.innerHTML = checkViews(slider.value);

  const checkIfcheckboxIsChecked = isChecked
    ? checkPrice(slider.value) * multiply
    : checkPrice(slider.value);

  if (sliderValue >= 0 && sliderValue < 20) {
    price.innerHTML = checkIfcheckboxIsChecked;
  }
  if (sliderValue >= 20 && sliderValue < 40) {
    price.innerHTML = checkIfcheckboxIsChecked;
  }
  if (sliderValue >= 40 && sliderValue < 60) {
    price.innerHTML = checkIfcheckboxIsChecked;
  }
  if (sliderValue >= 60 && sliderValue < 80) {
    price.innerHTML = checkIfcheckboxIsChecked;
  }
  if (sliderValue >= 80 && sliderValue <= 100) {
    price.innerHTML = checkIfcheckboxIsChecked;
  }
};
