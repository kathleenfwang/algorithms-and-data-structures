
def longest_substring(s):
    # ppkwew 
    result, length, start = 0,0,0 
    lookup = {} 
    for i in range(0,len(s)):
        if s[i] not in lookup: 
            # length will increment 
            length+=1
        else:
            # otherwise, set the new starting position to equal either the lookup of the last position of the matching element, or the current start 

            start = max(lookup[s[i]],start)
            # now the current length is set to index - start 
            length = i - start 
        # always want to update lookup to hold the last index of the current character
        lookup[s[i]] = i 
        # everytime we want to make sure the max is result or the current length 
        result = max(result, length)

    return result 

print(longest_substring("ppkwew"))# 4 