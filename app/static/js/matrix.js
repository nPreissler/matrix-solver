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
        cell.innerHTML = `<input type="number" name="" id="num-a" class="matrix-number">`;
        containerA.appendChild(cell)
    }

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.style.padding = '1em'
        cell.innerHTML = `<input type="number" name="" id="num-b" class="matrix-number">`;
        containerB.appendChild(cell)
    } // create matrices inputs to user fill and send it to get a operation

    calculateButton.disabled = false; //enable button again after generate inputs to user fill matrices
    calculateButton.style.background = '#000'; 
}

document.getElementById('calculate').addEventListener('click', async () => {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('columns').value;

    const matrixA = [];
    const matrixB = [];
    // create empty lists for reserve the numbers that user will fill in inputs

    document.querySelectorAll('#matrix-inputs-a .matrix-number').forEach(input => {
        matrixA.push(Number(input.value));
    });

    document.querySelectorAll('#matrix-inputs-b .matrix-number').forEach(input => {
        matrixB.push(Number(input.value));
    }); // putting numbers that user filled in lists

    console.log(matrixA)
    console.log(matrixB)

    const operation = document.getElementById('operation').value;

    const payload = {
        rows: parseInt(rows),
        cols: parseInt(cols),
        matrixA,
        matrixB,
        operation
    };

    console.log(payload) // informations of requisition

    try {
        const response = await fetch('http://127.0.0.1:5000/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json(); //get return of result of operation
            console.log('Result: ', result) 
        } 
        else {
            console.log('Error in backend response'); //alert if backend apresnet errors/problems for process the operation
        }
    } 
    catch(error) {
        console.error('Fetch error:', error)
    }

});

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
// backend brings results back
// __return it to page
