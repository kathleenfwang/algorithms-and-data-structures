def push(arr,n): 
    que = []
    #return a queue with all elements of arr inserted in it
    for i in arr: 
        que.append(i)
    return que
    
    
def _pop(q):
    
    #dequeue elements and print them
    q_len = len(q)
    for i in range(0,q_len): 
        first = q[0] 
        print(first, end = " ")
        q.pop(0)
