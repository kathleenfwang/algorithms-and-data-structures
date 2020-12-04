def missingPanagram(s):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    dic = {} 
    for i in alpha: 
        dic[i] = 1 # {a: 1, b:1 .. .
    # compare each letter in s to alpha(lowercase) 
    # return what is missing
    for j in s: 
        if j.lower() in dic: 
            del dic[j.lower()] 
    keys = dic.keys()
    return "".join(keys)
str = "APFGMRZXIFPSXKOQDRRQJBBZ"
print(missingPanagram(str))