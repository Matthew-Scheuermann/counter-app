// STATE
let count = 0;

// USER INTERACTION

// grab html elements
const countDisplay = document.querySelector("#number");
const addButton = document.querySelector("#plus");
const subButton = document.querySelector("#minus");

// change color function
const changeScoreColor = () => {
  if (count >= 10) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
};

// add event listener for adding 1
addButton.addEventListener("click", () => {
  count++;
  countDisplay.innerHTML = count;
  changeScoreColor();
});

// add event listener for subtracting 1
subButton.addEventListener("click", () => {
  count--;
  countDisplay.innerHTML = count;
  changeScoreColor();
});
