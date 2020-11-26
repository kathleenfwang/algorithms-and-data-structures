def binary_search(list,n):
    # [1234567891012] 
    return binary_search_helper(n,list,0,len(list))

def binary_search_helper(n,list,start,end):
    mid = (start+end) // 2
    if n == list[mid]:
        return True 
    if n < list[mid]:
        return binary_search_helper(n,list,0,mid)
    else: 
        return binary_search_helper(n,list,mid+1,len(list))