def isBinary(str):
    #code here
    # loop through str and see if it is == 1 or 0 
    for i in str:
        if (i != "0" and i != "1"):
            return False
    return True
str = "0111100110101100"
print(isBinary(str))