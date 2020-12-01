import math
def digitsInFactorial(N):
    # code here
    def factorial_helper(n):
        if (n == 0 or n == 1):
            return 1
        return n * factorial_helper(n-1)
    count = 0 
    def digits_in_fact(num,count):
        # keep dividing by 10 until you cant? 
        count+=1
        if num <=  9:
            return count 
        return digits_in_fact(num//10,count)
        
    fact = factorial_helper(N)
    return digits_in_fact(fact,count)
# optimized, find the log of the factorial instead 
# log of a number is equal to log of the numbers added 
# log(a*b) = log(a) + log(b)

def factorial_digits_optimized(n):
    if n < 0:
        return 0
    if n == 1 or n == 0:
        return 1 
    result = 0 
    # start at 2 because log(1) = 0 
    for i in range(2,n+1):
        result += math.log10(i)
    return math.floor(result) + 1
print(factorial_digits_optimized(5))