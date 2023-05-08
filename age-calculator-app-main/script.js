let button = document.querySelector(".button");

//Current Date

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

//button action

button.addEventListener("click", () => {
  let dayOfBirth = document.getElementById("day").value;
  let monthOfBirth = document.getElementById("month").value;
  let yearOfBirth = document.getElementById("year").value;

  //Verify if the fields are completed

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  if (
    dayOfBirth.length === 0 ||
    monthOfBirth.length === 0 ||
    yearOfBirth.length === 0
  ) {
    return console.log("empty");
  } else if (dayOfBirth < 1 || dayOfBirth > daysInMonth(month, year)) {
    return console.log("not a valid day");
  } else if (monthOfBirth < 1 || monthOfBirth > 12) {
    return console.log("not a valid month");
  } else if (yearOfBirth > year) {
    return console.log("not a valid year");
  } else {
    let d;
    let m;
    let y = year - yearOfBirth;
    if (month >= monthOfBirth) {
      m = month - monthOfBirth;
    } else {
      m = 12 + month - monthOfBirth;
      y--;
    }
    if (day >= dayOfBirth) {
      d = day - dayOfBirth;
    } else {
      d = daysInMonth(month, year) + day - dayOfBirth;
      m--;
      if (m < 0) {
        m = 11;
        y--;
      }
    }
    document.getElementById("y").textContent = y;
    document.getElementById("m").textContent = m;
    document.getElementById("d").textContent = d;
  }
});
