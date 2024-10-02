let number = document.getElementById("number");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");

let count = 0;

increment.addEventListener("click", function () {
  count++;
  pasteTheResult();
});

decrement.addEventListener("click", function () {
  count--;
  pasteTheResult();
});

reset.addEventListener("click", function () {
  count = 0;
  pasteTheResult();
});

function pasteTheResult() {
  number.innerHTML = count;
}
