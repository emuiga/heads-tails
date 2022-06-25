let myPick = null;
let computerPick = null;
let round = null;
let person = null;
let computer = null;

let flipBtn = document.querySelector("#head-tail");

flipBtn.addEventListener("click", () => {
  round++;
  document.getElementById("round").innerHTML = ` - Round: ${round}`;

  computerChoice();
  myChoice();

  if (round == 1) {
    computerPick === "tails" && myPick === 'heads' ? person += 1 : computer += 0;
  } else if (round == 2) {
    computerPick === "tails" && myPick === 'heads' ? person += 2 : computer += 0;
  } else if (round == 3) {
    computerPick === "heads" && myPick === 'heads' ? person += 3 : computer += 1;
  } else if (round == 4) {
    computerPick === "tails" && myPick === 'tails' ? person += 3 : computer += 2;
  } else if (round == 5) {
    computerPick === "tails" && myPick === 'heads' ? person += 4 : computer += 2;
    disableBtn();
    person >= computer ? alert('You win!') : alert('You lose!');
  }

  console.log(`person: ${person}`); console.log(`computer: ${computer}`);
});

const computerChoice = () => {
  let coins = ["tails", "heads"];
  let random = Math.round(Math.random() % 2);
  computerPick = coins[random];

  console.log(`Computer Choice: ${computerPick}`);
};

const myChoice = () => {
  document.getElementById("heads").checked == true ? (myPick = "heads") : (myPick = "tails");
  console.log(`My Pick: ${myPick}`);
};

const disableBtn = () => {
  flipBtn.setAttribute("disabled", "disabled");
};

const resetBtn = document.getElementById("reset");

reset.addEventListener("click", () => {
  myPick = null;
  computerPick = null;
  round = null;
  computer = null;
  person = null;
  flipBtn.removeAttribute("disabled");
  document.getElementById("round").innerHTML = "";
});