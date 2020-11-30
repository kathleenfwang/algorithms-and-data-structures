# Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
# For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6,5
# [5, 1, 1, 5] should return 10, since we pick 5 and 5.

def find_max_sum(arr): 
    incl = 0
    excl = 0
     
    for i in arr: 
          
        # Current max excluding i (No ternary in  
        # Python) 
        print(incl,excl)
        new_excl = excl if excl>incl else incl 
         
        # Current max including i 
        incl = excl + i 
        excl = new_excl 
      
    # return max of incl and excl 
    print('****')
    print(incl,excl)
    return (excl if excl>incl else incl) 
  
# Driver program to test above function 
arrs =  [
    # [2, 4, 6, 2, 5],
    [5, 1, 1, 5]

]
for arr in arrs:
    print(find_max_sum(arr))

def find_max_sum2(arr):
    incl = 0 
    excl = 0 
    for i in arr:
        # keep previous excluding or the previous element sum 
        new_excl = excl if excl > incl else incl 
        incl = i + excl # current + excluding 
        excl = new_excl
