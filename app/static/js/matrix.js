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

            setTimeout(() => {
                const resultContainer = document.getElementById('matrix-result');
                resultContainer.innerHTML = ''; // Limpa o contêiner de resultados anteriores

                // Transforma a matriz 1D em 2D
                const result2D = [];
                for (let i = 0; i < payload.rows; i++) {
                    result2D.push(result.slice(i * payload.cols, (i + 1) * payload.cols));
                }

                // Define o layout de grade para o resultado
                resultContainer.style.display = 'grid';
                resultContainer.style.gridTemplateRows = `repeat(${payload.cols}, auto)`;
                resultContainer.style.gap = '0.5em';

                // Adiciona os números como células individuais
                result2D.forEach(row => {
                    row.forEach(value => {
                        const cell = document.createElement('div');
                        cell.classList.add('result-cell')
                        cell.innerHTML = `<p> ${value} </p>` ;  // Cada célula contém apenas um número
                        cell.style.border = '1px solid #000';
                        cell.style.padding = '0.5em';
                        cell.style.textAlign = 'center';
                        resultContainer.appendChild(cell);
                    });
                });

            }, 1000)
        }
        else {
            console.log('Error in backend response'); //alert if backend apresnet errors/problems for process the operation
        }



    }
    catch (error) {
        console.error('Fetch error:', error)
    }


});