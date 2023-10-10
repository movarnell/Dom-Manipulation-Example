
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');

let table = document.getElementById('table');
let body = document.getElementById('body');
let col1 = document.getElementById('col1');
let col2 = document.getElementById('col2');
let col3 = document.getElementById('col3');

let tbody = document.getElementById('tbody');
title.display = 'show'  

btn1.addEventListener('click', button1);
btn2.addEventListener('click', titleDisplayToggle);
btn3.addEventListener('click', button3);
btn4.addEventListener('click', button4);

let hWorld = 'Hello World';
let mainTitle = 'Dom Manipulation Example';

function randomColor() {
    let color = '#';
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    textColorToTable(color);
    return color;
}



function button1() {
  body.style.backgroundColor = randomColor();
  //append color name to col1 below button
  }

function titleDisplayToggle () {
  title.style.display === 'none' ? title.style.display = 'block' : title.style.display = 'none';
}

function button3() {
    title.innerHTML === mainTitle ? title.innerHTML = hWorld : title.innerHTML = mainTitle;
}

function button4() {
    mainTitle = document.getElementById('name').value;
    title.innerHTML = mainTitle;
    document.getElementById('name').value = '';
}

function textColorToTable(color) {
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let cell2 = document.createElement('td');
    
    row.classList.add('table-transition')
    cell.innerHTML = color;
    row.appendChild(cell);
    row.appendChild(cell2);
    cell2.innerHTML = mainTitle;
    tbody.appendChild(row);
   
    for (let i = 0; i < tbody.rows.length; i++) {
        tbody.rows[i].cells[0].style.color = tbody.
        rows[i].cells[0].innerHTML;
        tbody.rows[i].cells[1].style.color = tbody.rows[i].cells[0].innerHTML;
    }
 
}
