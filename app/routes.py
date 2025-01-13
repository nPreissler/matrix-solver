# set routes 
from flask import Blueprint, render_template, request, jsonify
from .utils.matrix_operations import add_matrices, subtract_matrices, multiply_matrices

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    rows = data['rows']
    cols = data['cols']
    matrix_a = data['matrixA']
    matrix_b = data['matrixB']
    operation = data['operation']

    matrix_a_2d = [matrix_a[i * cols:(i + 1) * cols] for i in range(rows)]
    matrix_b_2d = [matrix_b[i * cols:(i + 1) * cols] for i in range(rows)]

    try:
        if operation == 'add':
            result = add_matrices(matrix_a_2d, matrix_b_2d)
        elif operation == 'subtract':
            result = subtract_matrices(matrix_a_2d, matrix_b_2d)
        elif operation == 'multiply':
            result = multiply_matrices(matrix_a_2d, matrix_b_2d)
        else:
            return jsonify({'error': 'Invalid operation'}), 400

        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500