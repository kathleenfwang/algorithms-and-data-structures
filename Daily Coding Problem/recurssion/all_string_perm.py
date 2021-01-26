def all_string_perm(str,step):
    if step == len(str):
        print("".join(str))
        return 
    for i in range(step,len(str)):
        str_copy = list(str) 
        str_copy[i],str_copy[step] = str_copy[step],str_copy[i] 
        all_string_perm(str_copy,step+1)


# For example, string ABC has 6 permutations. i.e. ABC, ACB, BAC, BCA, CBA, CAB
# so the other variations have to be different than first 
# we are keeping track of a "step" that will move forward by one 
# each time we swap the step and the current index 
str = "ABC"
all_string_perm(str, 0)