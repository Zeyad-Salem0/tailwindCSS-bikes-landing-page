const btns = document.querySelectorAll(".btn");
// console.log(btns);

//remove active class from all buttons
function removeActiveClass() {
  btns.forEach((button) => {
    button.classList.remove("btn-active");
  });
}
// current bike card
var crntCard = document.getElementById("road-bike");
// console.log(crntCard);
btns.forEach((button) => {
  //remove .active class
  button.addEventListener("click", function () {
    removeActiveClass();
    this.classList.add("btn-active");
    //...... show/hide bike cards

    // hide previous section
    crntCard.classList.add("hidden");

    // read attribute
    crntCard = document.querySelector(this.getAttribute("data-target"));
    // console.log(crntCard);
    // show section
    crntCard.classList.remove("hidden");
  });
  //add .active class to the clicked element
});
//set the default active button
// window.addEventListener("DOMContentLoaded", (event) => {
//   document.querySelector(".btn").classList.add(".btn-active");
// });

// show/hide bike parts description
const partsToggler = document.querySelectorAll(".parts-tglr");
console.log(partsToggler);
partsToggler.forEach((el) => {
  el.addEventListener("click", function () {
    const checker = document.querySelector(this.getAttribute("data-target"));
    if (checker.classList.contains("hidden")) {
      checker.classList.remove("hidden");
    } else if (!checker.classList.contains("hidden")) {
      checker.classList.add("hidden");
    }
  });
});
