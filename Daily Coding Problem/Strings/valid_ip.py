def isValid(s):
    #code here
    # break up string into array by . 
    # if the elements have a . invalid
    # element have to be between 0 to 255 
    # element with leading 0s (007,00..) is invalid
    arr = s.split(".") # [221,111...] 
    for i in arr: 
        try:
            if str(int(i)) != i:
                print('hi') 
                return 0
            if int(i) < 0 or int(i) > 255:
                return 0
        except:
            return 0 
    return 1
s = '67.53.56.29'
print(isValid(s))