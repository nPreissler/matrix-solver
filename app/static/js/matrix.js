const calculateButton = document.getElementById('calculate');
calculateButton.style.background = '#ccc';
calculateButton.disabled = true;

//after page is loaded, button turns at disabled status


function returnMatrix() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('columns').value; //get values, rows and cols

    const container = document.getElementById('matrix-inputs') // element who's reserve space for create this matrices

    container.style.display = 'grid'
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    container.style.gridTemplateRows = `repeat(${rows}), auto` // setting style for matrices have the correct size ----> without this, all numbers are stand in one line


    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.style.padding = '1em'
        cell.textContent = i +1 + 'a';
        container.appendChild(cell)
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
