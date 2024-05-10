function askUser() {
  let name = prompt("What is your name?");
  let age = prompt("What is your age?");
  let email = prompt("What is your email address?");

  if (age >= 18) {
    alert("Thank you," + " " + name + " " + "We'll be in touch😄");
  } else {
    alert("Sorry you cannot join group ☹️");
  }
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", askUser);
