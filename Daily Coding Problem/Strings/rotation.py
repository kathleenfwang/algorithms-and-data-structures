def areRotations(s1,s2):
    #code here
    end_len = 0  
    i = 0 
    j = 0 
    if len(s1) != len(s2):
        return False
    while i < len(s1):
        if s1[i] == s2[j]:
            end_len+=1 
            i+=1 
            j+=1 
        else:
            end_len = 0 
            i+=1 
            j=0
    if end_len == 0:
        return False
    i = 0 
    while i < len(s1) - end_len:
        if s1[i] != s2[j]:
            return False
        i+=1 
        j+=1
    return True