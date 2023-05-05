let button = document.getElementById("submit");

//Current Date

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

//button action

button.addEventListener("click", () => {
  let dayOfBirth = document.getElementById("day").value;
  let monthOfBirth = document.getElementById("month").value;
  let yearOfBirth = document.getElementById("year").value;

  //Verify if the fields are all complete

  if (
    dayOfBirth.length === 0 ||
    monthOfBirth.length === 0 ||
    yearOfBirth.length === 0
  ) {
    console.log("empty");
  }
});
