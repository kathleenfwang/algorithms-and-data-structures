# Given a non-negative integer numRows, generate the first numRows of Pascal's
# triangle. In Pascal's triangle, each number is the sum of the two numbers directly above
# it.
# Input: 5
# Output:
# [
#  [1],
#  [1,1],
#  [1,2,1],
#  [1,3,3,1],
#  [1,4,6,4,1] 

def pascals_triangle(num):
    # first and last numbers are always 1 
    # loop through columns and add in rows with correct #s 
    triangle = []
    for i in range(0,num):
        temp =[] 
        for j in range(0,i+1):
            if j == 0 or j == i:
                temp.append(1)
            else:
                temp.append(triangle[i-1][j] + triangle[i-1][j-1])
        triangle.append(temp)
    return triangle 

print(pascals_triangle(5))