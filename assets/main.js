const button5 = document.querySelector("#plusFive")
const button10 = document.querySelector("#plusTen");
const button15 = document.querySelector("#plusFifteen");
const button20 = document.querySelector("#plusTwenty");
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})
button10.addEventListener('click', () => {
  disp.textContent = "added 10"
  indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
})
button15.addEventListener('click', () => {
  disp.textContent = "added 15"
  indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
})
button20.addEventListener('click', () => {
  disp.textContent = "added 20"
  indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
})

const uHeads = document.querySelector('#heads')
const uTails = document.querySelector('#tails')
const reset = document.querySelector('#reset')

let winnner = ''
let chosen = 0
let compChosen = 0
let outcome = 0
let table = document.querySelector('table')
let totalrows = document.querySelectorAll('table tr').length;
let yourScore = 0
let compScore = 0

uHeads.addEventListener('click', () => {
  chosen = 1
  evaluate()
  let row = table.insertRow(totalrows)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)
  cell1.textContent= 'Head'
  cell2.textContent=compChosen ===1?'Head':'Tails'
  cell3.textContent = outcome === 1 ? "Head" : "Tails";
  cell4.textContent=yourScore
  cell5.textContent=compScore
  

  
})
uTails.addEventListener('click', () => {
  chosen = 2
  evaluate()
  let row = table.insertRow(totalrows);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	let cell3 = row.insertCell(2);
	let cell4 = row.insertCell(3);
	let cell5 = row.insertCell(4);
	cell1.textContent = "Tails";
	cell2.textContent = compChosen === 1 ? "Head" : "Tails";
	cell3.textContent = outcome === 1 ? "Head" : "Tails";
	cell4.textContent = yourScore;
	cell5.textContent = compScore;

	
})

const evaluate = () => {
  	compChosen = Math.floor(Math.random() * 2) + 1;
  outcome = Math.floor(Math.random() * 2) + 1;
  if ((table.rows.length === 5)) {
     calculate()
  }
		if (chosen == outcome && compChosen !== outcome) {
      console.log("You win");
      yourScore++
		} else if (chosen !== outcome && compChosen === outcome) {
      console.log("Comp wins");
      compScore++
		} else if (chosen === outcome && compChosen === outcome) {
			console.log("You tie");
    }
}

const calculate = () => {
  yourScore > compScore ? alert('you won') : compScore > yourScore ? alert('comp won') : alert('you tie')
  location.reload()
}

const reload = () => {
  reset.addEventListener('click', () => {
    location.reload()
  })
}
reload()