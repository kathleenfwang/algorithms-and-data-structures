# sum odd fib numbers less than or equal to n 
def sum_odd_fib(num):
    current = 1 
    prev = 0 
    result = 0 
    if (num <= 1):
        return 1 
    while (current <= num):
        # if current is odd, add to result 
        if (current %2 != 0 ):
            result+=current 
        # preserve the original prev and current values into next 
        next_num = prev + current 
        # prev is now changed 
        prev = current 
        # if i did current = current + prev, will just be current * 2 
        # if i put prev = current after, prev will equal new current
        current = next_num
    return result 
print(sum_odd_fib(10))