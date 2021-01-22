def kmp_matching(str, pattern):
#     Input:  txt[] = "THIS IS A TEST TEXT"
#         pat[] = "TEST" 1 
# Input:  txt[] =  "AABAACAADAABAABA"
#         pat[] =  "AABA" 3 

    i = 0 
    j = 0 
    count = 0 
    while i < len(str):
        if pattern[j] == str[i]:
            if j == len(pattern)-1:
                # reset j 
                count+=1 
                j = 0 
                # move i down 
                i-=1 
            else:
                j+= 1 
                i+=1
        else:
            i+=1 
    return count 
test_str = "THIS IS A TEST TEXT"
pattern = "TEST"
test_2 = "AABAACAADAABAABA"
pattern = "AABA"
print(kmp_matching(test_2,pattern))