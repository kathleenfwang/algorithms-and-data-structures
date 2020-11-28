def majorityWins(arr,x,y):
    # code here
    # having a frequency counter for x and y 
    # at the end, return if x or y is bigger by the counter
    counterX = 0 
    counterY = 0 
    for num in arr:
        if num == x:
            counterX += 1
        elif num == y:
            counterY+=1
    if counterX == 0 and counterY == 0:
        if (x < y):
            return x
        else:
            return y 
    else:
        if (counterX > counterY):
            return x 
        else:
            return y
arr = [1,2,3,4,5,6]
print(majorityWins(arr,12,15))