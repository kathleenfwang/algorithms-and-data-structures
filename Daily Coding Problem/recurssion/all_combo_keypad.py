keypad = [
        # 0 and 1 digit don't have any characters associated
        [],
        [],
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
        ['J', 'K', 'L'],
        ['M', 'N', 'O'],
        ['P', 'Q', 'R', 'S'],
        ['T', 'U', 'V'],
        ['W', 'X', 'Y', 'Z']
    ]
def all_combo_keypad(num,result,i): 
    if i == 3:
        print result
        return 
    for char in keypad[2]: # "A" , "B", "C"
        result[i] = char 
        all_combo_keypad(num,result,i+1) 


all_combo_keypad(2,[0,0,0],0) # -> A B C 
def all_combo_str(str,result,i): 
    # str = "hello"
    if i == len(str):
        print("".join(result))
        return 
    for char in str: # "A" , "B", "C"
        result[i] = char 
        all_combo_str(str,result,i+1) 

str = "hello"
print(all_combo_str(str,list(str),0))# -> A B 
