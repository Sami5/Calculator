"use strict";

let entries = []; 
let log = [];
let currentEntry = "";

function entry() {
  entries.push(this.value);
  currentEntry = entries.join("");
  document.getElementById("result").innerHTML = currentEntry;

  console.log("currentEntry: " + currentEntry);
  console.log("entries: " + entries);
  console.log("log: " + log); 

}

// Clears "log" (everything) to zero
function clearAC() {
  log = [];
  currentEntry = "";
  entries = [];
  document.getElementById("result").innerHTML = currentEntry;

  console.log("AC " + log);
}

// Clears "currentEntry" to zero
function clearCE() {
  currentEntry = "";
  entries = [];
  document.getElementById("result").innerHTML = currentEntry;

  console.log("CE " + currentEntry);

}

function calc() {
  log.push(currentEntry);
  entries = []; 
  currentEntry = this.value;
  document.getElementById("result").innerHTML = currentEntry;

  console.log("currentEntry: " + currentEntry); 
  console.log("log: " + log);
}

function equals() {

  document.getElementById("result").innerHTML = currentEntry;
}


$(document).ready(() => {

  $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #decimal").on("click", entry);

  // Clears "log" (everything) to zero
  $("#AC").on("click", clearAC);

  // Clears "currentEntry" to zero
  $("#CE").on("click", clearCE);  

  $("#X, #divide, #minus, #plus").on("click", calc);

});

