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
def main(num):
    j = 0 
    while j < len(num):
        all_combo_keypad(num,[0] * 3,0,num[j])
        print(j)
        j+=1 
def all_combo_keypad(num,result,i,j): 
        if i == 3:
            print(result)
            return 
        for char in keypad[j]: # "A" , "B", "C"
            result[i] = char 
            all_combo_keypad(num,result,i+1,j) 
num = [2,3,4]
main(num)
# def all_combo_str(str,result,i): 
#     # str = "hello"
#     if i == len(str):
#         print("".join(result))
#         return 
#     for char in str: # "A" , "B", "C"
#         result[i] = char 
#         all_combo_str(str,result,i+1) 

# str = "hello"
# print(all_combo_str(str,list(str),0))# -> A B 
