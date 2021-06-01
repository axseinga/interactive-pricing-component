const slider = document.getElementById("sliderRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

function updateGradient(rangeValue) {
  const percentage =
    ((rangeValue - slider.min) / (slider.max - slider.min)) * 100;
  console.log(percentage);
  slider.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) ${percentage}%, hsl(224, 65%, 95%) ${percentage}%)`;
}

// Update gradient onload
updateGradient(slider.value);

// Update gradient oninput
slider.addEventListener("input", (e) => {
  output.innerHTML = e.target.value;
  updateGradient(e.target.value);
});
