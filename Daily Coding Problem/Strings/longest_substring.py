def SubsequenceLength(s):
    #Codee here
    seen = {} 
    max_len = 0 
    start = 0 
    for ind in range(len(s)):
        print(max_len)
        if (s[ind] in seen):
            # start at start or ind of element right after the seen 
            start = max(start, seen[s[ind]] + 1)
        seen[s[ind]] = ind 
        max_len = max(max_len, ind-start+1)
    print(seen)
    return max_len
s = 'dvdf'
print(SubsequenceLength(s))