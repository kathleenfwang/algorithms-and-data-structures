def reverse_str(str, i, k ):
    # swap current and last
    if i == k: 
        return 
    temp = str[i] 
    str[i] = str[k]
    str[k] = temp 
    reverse_str(str,i+1, k-1) 
    return "".join(str)
# if you are doing c++, instead of doing the whole temp thing and turning str into list, can do swap(x,y)
str = "Testing"
print(reverse_str(list(str), 0, len(str) - 1))