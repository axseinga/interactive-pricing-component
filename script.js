// Slider color change //

const slider = document.getElementById("sliderRange");
const output = document.getElementById("demo");
const price = document.getElementById("price");
const views = document.getElementById("views");
const checkbox = document.getElementById("checkbox");
output.innerHTML = slider.value;

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
  updateGradient(e.target.value);
  // Update views and price
  if (e.target.value >= 0 && e.target.value < 20) {
    views.innerHTML = "10K";
    if (!checkbox.checked) {
      price.innerHTML = 8;
    } else {
      price.innerHTML = 8 * 0.75;
    }
  }
  if (e.target.value >= 20 && e.target.value < 40) {
    views.innerHTML = "50K";
    if (!checkbox.checked) {
      price.innerHTML = 12;
    } else {
      price.innerHTML = 12 * 0.75;
    }
  }
  if (e.target.value >= 40 && e.target.value < 60) {
    views.innerHTML = "100K";
    if (!checkbox.checked) {
      price.innerHTML = 16;
    } else {
      price.innerHTML = 16 * 0.75;
    }
  }
  if (e.target.value >= 60 && e.target.value < 80) {
    views.innerHTML = "500K";
    if (!checkbox.checked) {
      price.innerHTML = 24;
    } else {
      price.innerHTML = 24 * 0.75;
    }
  }
  if (e.target.value >= 80 && e.target.value < 100) {
    views.innerHTML = "1M";
    if (!checkbox.checked) {
      price.innerHTML = 36;
    } else {
      price.innerHTML = 36 * 0.75;
    }
  }
});

// Price update based on slider value
// $8 - 0 -19
// $12 - 20-39
// $16 - 40-59
// $24 - 60 - 79
// $36 - 80 - 100

/* function updateValue(e, min, max, views, price) {
    if (e >= min && e.target.value < max) {
      views.innerHTML = views;
      if (!checkbox.checked) {
        price.innerHTML = price;
      } else {
        price.innerHTML = price * 0.75;
      }
    }
  } 
  
  // Check for checked input monthly - yearly
//checkbox.addEventListener("change", (e) => {
//  if (e.target.checked) {
//    console.log("checked");
//  } else {
//    console.log(" not checked");
//  }
//});*/
