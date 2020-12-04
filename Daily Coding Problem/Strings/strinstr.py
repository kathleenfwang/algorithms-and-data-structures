def strstr(s,p):
    #code here
    # loop through first string and seee if first letter of p is in it
    # then loop through until end of p and see if its matching 
    i = 0 
    for i in range(0,len(s)): 
        str_pass = True 
        if (s[i] == p[0]):
            for j in range(1,len(p)):
                if j + i >= len(s): 
                    str_pass = False
                    break
                if (p[j] != s[j+i]):
                    str_pass = False
            if (str_pass):
                return i
    return -1
s1 = "abcabcabcd"
s2 = "abcd"
print(strstr(s1,s2))