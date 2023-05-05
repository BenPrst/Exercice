let button = document.getElementById("submit");

//Current Date

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

//button action

button.addEventListener("click", () => {
  let dayOfBirth = document.getElementById("day").value;
  let monthOfBirth = document.getElementById("month").value;
  let yearOfBirth = document.getElementById("year").value;

  //Verify if the fields are completed

  if (
    dayOfBirth.length === 0 ||
    monthOfBirth.length === 0 ||
    yearOfBirth.length === 0
  ) {
    return console.log("empty");
  } else if (dayOfBirth < 1 || dayOfBirth > 31) {
    return console.log("not a valid day");
  } else if (monthOfBirth < 1 || monthOfBirth > 12) {
    return console.log("not a valid month");
  } else if (yearOfBirth > year) {
    return console.log("not a valid year");
  } else {
    let d;
    let m;
    let y = year - yearOfBirth;
    if (monthOfBirth > month) {
      m = 12 + month - monthOfBirth;
      y--;
    } else {
      m = month - monthOfBirth;
    }
    if (dayOfBirth > day) {
      d = 30 + day - dayOfBirth;
      m--;
    } else {
      d = day - dayOfBirth;
    }
    document.getElementById("y").textContent = y;
    document.getElementById("m").textContent = m;
    document.getElementById("d").textContent = d;
  }
});
