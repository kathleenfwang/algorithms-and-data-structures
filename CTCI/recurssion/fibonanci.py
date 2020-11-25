# Ex: num = 6 // 1 1 2 3 5 = 8 
def fibonanci(num): 
    if (num == 1 or num == 2):
        return 1 
    return fibonanci(num-1) + fibonanci(num-2)

def memoized_fib(num):
    memo = [] 
    for i in range(0,num+1):
        memo.append(-1)
    return memoized_helper_fib(num,memo)

def memoized_helper_fib(num,memo):
    if num == 0: 
        return 0 
    if (num == 1 or num == 2):
        return 1 
    if (memo[num] > -1):
        return memo[num]
    else:
        memo[num] = memoized_helper_fib(num-1,memo) + memoized_helper_fib(num-2,memo)
    return memo[num]

print(memoized_fib(6))