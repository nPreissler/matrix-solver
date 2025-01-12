#matematic operations with matrices
import numpy as np 

def add_matrices(a, b):
    return np.add(a, b).toList()

def subtract_matrices(a, b):
    return np.subtract(a, b).toList()

def multiply_matrices(a, b):
    return np.dot(a, b).toList()