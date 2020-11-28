def fun1(x,y):
    if (x==0):
        return y
    return fun1(x-1,x+y)

print(fun1(4,3))

# create tree with aligned spaces (upside down)
# if you want it rightside up, change base case to when n == length and increment n instead
def fun2(n,orig): 
    str=""
    if n==0:
        return
    else:
        for i in range(0,orig-n):
            str+=" "
        for i in range(0,n): 
            str+="* "
    print(str)
    fun2(n-1,orig)
fun2(5,5)
print('next')
def tree(n,orig):
    str = ""
    if n == orig + 1:
        return 
    else:
        for i in range(0,orig-n):
            str+= " "
        for i in range(0,n):
            str+= "* "
    print(str)
    tree(n+1,orig)
tree(1,5)
def tree_trunk(n,tree_len,orig):
    str = ""
    if n == orig: 
        return 
    for i in range(0,tree_len//2 + 1):
        str+=" "
    str+="* *" 
    print(str)
    tree_trunk(n+1,tree_len,orig)
tree_trunk(0,5,2)
    