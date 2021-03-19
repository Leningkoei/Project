import numpy
import random


array1 = numpy.array([[random.randint(0, 201), random.randint(0, 201)], [random.randint(0, 201), random.randint(0, 201)]])
array2 = numpy.array([[random.randint(0, 201), random.randint(0, 201)], [random.randint(0, 201), random.randint(0, 201)]])
print(array1)
print(array2)
print(numpy.dot(array1, array2))