"use strict";

let entry = "";
let ans = "";
let log = "";
let currentEntry = "";

// Stop calculations that exceed max allowable digits
function logLength() {
  if (log.length <= 8 && currentEntry.length <= 8) {

    document.getElementById("result").innerHTML = currentEntry;
    document.getElementById("log").innerHTML = log;

  } else {

    currentEntry = "";
    entry = ""
    log = "";

    document.getElementById("result").innerHTML = "0";
    document.getElementById("log").innerHTML = "Digit Limit Met";
  }
}

// Enter numerical digits
function entries() {
  currentEntry += this.value;
  log += this.value;
  logLength();

  console.log("currentEntry: " + currentEntry);
  console.log("entry: " + entry);
  console.log("log: " + log);

}

// Only allows one decimal point
function decimal() {
  if (currentEntry.indexOf(".") === -1) {
    currentEntry += this.value;
    log += this.value;
    logLength();
  }

}

// Clears "log" (everything) to zero
function clearAC() {
  log = "";
  currentEntry = "";
  entry = "";
  logLength();

  console.log("currentEntry: " + currentEntry);
  console.log("entry: " + entry);
  console.log("log: " + log);

}

// Clears "currentEntry" to zero
function clearCE() {
  currentEntry = "";
  entry = "";
  document.getElementById("result").innerHTML = currentEntry;
  document.getElementById("log").innerHTML = log;

  console.log("currentEntry: " + currentEntry);
  console.log("entry: " + entry);
  console.log("log: " + log);

}

// Enter operators
function calc() {
  //log += currentEntry;
  entry = this.value;
  log += entry;
  currentEntry = "";
  logLength();

  document.getElementById("result").innerHTML = entry;
  document.getElementById("log").innerHTML = log;


  console.log("currentEntry: " + currentEntry);
  console.log("entry: " + entry);
  console.log("log: " + log);
}

// Calculate "="
function equals() {
  ans = eval(log);
  currentEntry = ans;

  document.getElementById("result").innerHTML = ans;
  document.getElementById("log").innerHTML = log + "=" + ans;

  console.log("log: " + log);
  log = ans;
  console.log("currentEntry: " + currentEntry);
  console.log("entry: " + entry);
  console.log("log: " + log);

}

$(document).ready(() => {

  $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine").on("click", entries);

  $("#decimal").on("click", decimal);

  // Clears "log" (everything) to zero
  $("#AC").on("click", clearAC);

  // Clears "currentEntry" to zero
  $("#CE").on("click", clearCE);

  $("#X, #divide, #minus, #plus").on("click", calc);

  $("#equal").on("click", equals);

});
