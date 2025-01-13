#matematic operations with matrices
def add_matrices(matrix_a, matrix_b):
    rows = len(matrix_a)
    cols = len(matrix_a[0])
    return [[matrix_a[i][j] + matrix_b[i][j] for j in range(cols)] for i in range(rows)]

def subtract_matrices(matrix_a, matrix_b):
    rows = len(matrix_a)
    cols = len(matrix_a[0])
    return [[matrix_a[i][j] - matrix_b[i][j] for j in range(cols)] for i in range(rows)]

def multiply_matrices(matrix_a, matrix_b):
    rows_a, cols_a = len(matrix_a), len(matrix_a[0])
    rows_b, cols_b = len(matrix_b), len(matrix_b[0])
    if cols_a != rows_b:
        raise ValueError("Number of columns in A must match rows in B for multiplication")
    result = [[sum(matrix_a[i][k] * matrix_b[k][j] for k in range(cols_a)) for j in range(cols_b)] for i in range(rows_a)]
    return result