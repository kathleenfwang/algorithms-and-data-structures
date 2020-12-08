def areIsomorphic(str1,str2):
    if (len(str1) != len(str2)):
        return False
    if (len(str1) == 0):
        return False
    dic1 = {} 
    dic2 = {} 
    for i in range(0,len(str1)):
        char1 = str1[i]
        char2 = str2[i]
        if char1 in dic1 and char2 in dic2:
            dic1[char1]+=1
            dic2[char2]+=1
        elif char1 not in dic1 and char2 not in dic2:
            dic1[char1] = 1
            dic2[char2] =1 
        else:
            return False 
    return True
str1 = "yeqfqojwtw"
str2 = "osileeztxw"

print(areIsomorphic(str1,str2))