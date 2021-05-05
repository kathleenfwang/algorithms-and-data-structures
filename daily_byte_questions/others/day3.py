def wordBreak(s, wordDict,memo ={}) -> bool:
    if s in memo:
        return memo[s]
    if s == "": 
        return True 
    
    for word in wordDict: 
        if s[:len(word)] == word: 
            if wordBreak(s[len(word):],wordDict,memo):
                return True 
    memo[s] = False 
    return False 
    
 

exs = [("aaaaaaa",["aaaa","aaa"]),("applepenapple", ["apple","pen"]), ("catsandog", ["cats","dog","sand","and","cat"]), ("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
) ]

for ex in exs: 
    print(wordBreak(ex[0],ex[1]))

