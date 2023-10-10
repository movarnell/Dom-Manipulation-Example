// Get references to buttons by their IDs
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");

// Get references to various HTML elements
let table = document.getElementById("table");
let body = document.getElementById("body");
let col1 = document.getElementById("col1");
let col2 = document.getElementById("col2");
let col3 = document.getElementById("col3");
let tbody = document.getElementById("tbody");

// Initialize the display property of 'title' to 'show'
title.style.display = "show";

// Add event listeners to buttons
btn1.addEventListener("click", button1);
btn2.addEventListener("click", titleDisplayToggle);
btn3.addEventListener("click", button3);
btn4.addEventListener("click", button4);

// Initialize some strings
let hWorld = "Hello World";
let mainTitle = "Dom Manipulation Example";

// Function to generate random color
function randomColor() {
  let color = "#";
  let letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  textColorToTable(color);
  return color;
}

// Function to change the background color of the body
function button1() {
  body.style.backgroundColor = randomColor();
  // Code to append color name to col1 below button can go here
}

// Function to toggle the display of 'title'
function titleDisplayToggle() {
  title.style.display === "none"
    ? (title.style.display = "block")
    : (title.style.display = "none");
}

// Function to toggle the innerHTML of 'title'
function button3() {
  title.innerHTML === mainTitle
    ? (title.innerHTML = hWorld)
    : (title.innerHTML = mainTitle);
}

// Function to set 'title' to user input and clear the input field
function button4() {
  mainTitle = document.getElementById("name").value;
  title.innerHTML = mainTitle;
  document.getElementById("name").value = "";
}

// Function to add a new row to the table and set its color
function textColorToTable(color) {
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  let cell2 = document.createElement("td");

  row.classList.add("table-transition");
  cell.innerHTML = color;
  row.appendChild(cell);
  row.appendChild(cell2);
  cell2.innerHTML = mainTitle;
  tbody.appendChild(row);

  // Loop to set the text color for all rows in the table
  for (let i = 0; i < tbody.rows.length; i++) {
    tbody.rows[i].cells[0].style.color = tbody.rows[i].cells[0].innerHTML;
    tbody.rows[i].cells[1].style.color = tbody.rows[i].cells[0].innerHTML;
  }
}
