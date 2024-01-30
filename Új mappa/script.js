const gomb = document.querySelector("button");
const emailInput = document.querySelector("#email");
const kimenet = document.querySelector("#result");

gomb.addEventListener("click", function () {
  console.log(emailInput.value);
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value.match(emailFormat)) {
    kimenet.innerHtml = "Jó cím";
  } else {
    kimenet.innerHtml = "Rossz cím";
  }
});

gomb.addEventListener("click", function () {
  console.log(emailInput.validity.patternMismatch);

  if (!emailInput.validity.patternMismatch) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
});
