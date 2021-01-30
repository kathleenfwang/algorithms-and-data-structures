
def matching_pattern(pattern,string):
    if len(pattern) > len(string):
        return 0 
    i , j , length , result = 0, 0, 0, 0

    while j < len(string):
        if string[j] == pattern[i]:
            length +=1 
            i+=1 
            if length == len(pattern):
                result+=1 
                i = 0 
                length = 0 
        else:
            i = 0 
        j+=1 
    return result 
    
pattern = "hello" 
string = "helloworld!helloperson" 
# count how many times hello appears (2) 
print(matching_pattern(pattern,string))