const calculateButton = document.getElementById('calculate');
calculateButton.style.background = '#ccc';
calculateButton.disabled = true;

//after page is loaded, button turns at disabled status


function returnMatrix() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('columns').value; //get values, rows and cols

    const containerA = document.getElementById('matrix-inputs-a') // element who's reserve space for create this matrices
    const containerB = document.getElementById('matrix-inputs-b')

    containerB.style.display = 'grid';
    containerB.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    containerB.style.gridTemplateRows = `repeat(${rows}, auto)`;

    containerA.style.display = 'grid';
    containerA.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    containerA.style.gridTemplateRows = `repeat(${rows}), auto`; // setting style for matrices have the correct size ----> without this, all numbers are stand in one line


    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.style.padding = '1em'
        cell.innerHTML = `<input type="number" name="" id="matrix-number num-a">`;
        containerA.appendChild(cell)
    }

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.style.padding = '1em'
        cell.innerHTML = `<input type="number" name="" id="matrix-number num-b">`;
        containerB.appendChild(cell)
    }
}

returnMatrix()

// get rows
//get cols
// -- user click
// create a perimeter for matrix
// create one input element for row and column
// __ return it to page
// -- user fill fields
// -- user click (calculate)
//  get the fields numbers
// send to backend in a compatible format
// ******backend-precessing*****
// backend brings reuslts back
// __return it to page
