const buttonCountMe = document.getElementById("button-counter");
const displayCount = document.getElementById("counter");

let count = 0;

buttonCountMe.addEventListener("click", () => {
  count++;
  console.log(count, "count me!");
  displayCount.innerHTML = count;
});
