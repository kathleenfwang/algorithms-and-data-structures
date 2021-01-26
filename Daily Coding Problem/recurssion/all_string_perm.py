def all_string_perm(str,step):
    if step == len(str):
        print("".join(str))
        return 
    for i in range(step,len(str)):
        str[i],str[step] = str[step],str[i] 
        all_string_perm(str,step+1)


# For example, string ABC has 6 permutations. i.e. ABC, ACB, BAC, BCA, CBA, CAB
# so the other variations have to be different than first 
str = "ABC"
all_string_perm(list(str), 0)