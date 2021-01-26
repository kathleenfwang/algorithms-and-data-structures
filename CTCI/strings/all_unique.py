def is_unique(str):
    dic = {} 
    for i in str:
        if i in dic:
            return False
        else:
            dic[i] = 1 
    return True 
# check permutations: 
# each string has to have same # of values and frequency 
# check lenghts have to be equal 
# turn one string into hash_map of char and frequency 
# loop through other string and check if the key/frequency match
# if yes return true 

def is_permutation(str1,str2):
    if len(str1) != len(str2):
        return False 
    dic1 = {} 
    str1 = str1.lower()
    str2 = str2.lower() 

    for i in str1: 
        if i in dic1:
            dic1[i] +=1
        else:
            dic1[i] = 1 
    for j in str2:
        if j not in dic1:
            return False
        else:
            dic1[j] -=1 
            if dic1[j] == 0:
                del dic1[j] 
    return True 
str1 = "Gods"
str2 = "dods"
print(is_permutation(str1,str2))

def URLify(str):
    # replace spaces with "%"
    # split str into array by " ", then rejoin with "%"
    return "%20".join(str.split(" "))
str = "Mr John Smith"
print(URLify(str))

def palindrome_permutation(str):
    #Tact Coa"
    # place string into diciontary of char and frequency 
    # if str length is even, all characters have to have 2 frequency
    # if str length is odd, one character has 1 frequency, rest 2
    dic = {} 
    length = len(str)
    for i in str:
        i = i.lower()
        if i == " ":
            length -=1
            pass
        elif i in dic:
            if dic[i] != 1:
                return False 
            else:
                dic[i] +=1 
        else:
            dic[i] = 1 
    print(length)
    if length % 2 == 0:
        for i in dic:
            if dic[i] != 2:
                return False
    
    else:
        single_count = 0 
        for i in dic:
            if dic[i] != 2 and dic[i] != 1:
                print('s')
                return False 
            elif dic[i] == 1 and single_count == 0:
                single_count+=1
            elif dic[i] == 2 or dic[i] == 1:
                pass
            else:
                print(dic[i],i)
                return False 
        if single_count != 1:
            print('b')
            return False 
    return True 
str = "Tact Coa"
print(palindrome_permutation(str))

        