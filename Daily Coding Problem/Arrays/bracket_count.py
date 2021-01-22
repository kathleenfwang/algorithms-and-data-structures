def bracket_match(text):
    # note if we had to compare other types of brackets i.e. {}, [], we could use a dicitonary to compare the key-values 
    # since there is only one type of bracket in this case "()" we just do a simple comparism 
  stack = [] 
  count = 0 
  for i in range(len(text)): 
    if text[i] == "(": 
      stack.append(text[i]) 
    else:
      if len(stack) == 0:
        count+=1
      else:
        stack.pop()
          
  count+= len(stack)
  return count