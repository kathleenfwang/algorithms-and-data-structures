
def longest_substring(s):
    # ppkwew 
    result, length, start = 0,0,0 
    lookup = {} 
    for i in range(0,len(s)):
        if s[i] not in lookup: 
            length+=1
        else:
            start = max(lookup[s[i]],start)
            length = i - start 
        lookup[s[i]] = i 
        result = max(result, length)

    return result 

print(longest_substring("ppkwew"))# 4 