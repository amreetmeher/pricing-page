const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
  if (plansSwitch.checked) {
    basicPrice.innerText = "$429";
    professionalPrice.innerText = "$599";
    businessPrice.innerText = "$899";
    planDuration.forEach((p) => {
      p.innerText = "/ year";
    });
  } else {
    basicPrice.innerText = "$69";
    professionalPrice.innerText = "$99";
    businessPrice.innerText = "$159";
    planDuration.forEach((p) => {
      p.innerText = "/ month";
    });
  }
});
