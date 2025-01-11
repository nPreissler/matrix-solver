# set routes 
from flask import Blueprint, render_template, request, jsonify
from .utils.matrix_operations import add_matrices, subtract_matrices, multiply_matrices

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    matrix_a = data.get('matrix_a')
    matrix_b = data.get('matrix_b')
    operation = data.get('operation')

    try:
        if operation == 'add':
            result = add_matrices(matrix_a, matrix_b)
        elif operation == 'subtraction':
            result = subtract_matrices(matrix_a, matrix_b)
        elif operation == 'multiply':
            result = multiply_matrices(matrix_a, matrix_b)
        else:
            return jsonify({'error':'Invalid Operation'}), 400
        
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500