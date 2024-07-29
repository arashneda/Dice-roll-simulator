const rollButtonEl = document.querySelector(".roll-button");
const diceEl = document.getElementById("dice");
let rollHistoryEl = document.querySelector("#roll-history");

let rollHistory = [];
function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diseface = getDiceResult(rollResult);
  diceEl.innerHTML = diseface;
  rollHistory.push(rollResult);
  updateHistory();
  console.log(rollResult);
}

function updateHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < rollHistory.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<li>roll ${i + 1}:<span>${getDiceResult(
      rollHistory[i]
    )}</span></li>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceResult(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }
}

rollButtonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  rollDice();
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
  }, 1000);
});
