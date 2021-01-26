nums = []
for i in range(1,21):
    nums.append(i)
    nums.append(i*2)
    nums.append(i*3)
# [1,2,3 ... 20] 

def find_solutions(target,depth):
    result = []
    if depth < 3:
        for num in nums:
                if num < target:
                    partial_solution = [num]
                    for solution in find_solutions(target - num,depth+1):
                                result.append(partial_solution + solution)

                elif num == target:
                    result.append([num])
                else:
                    pass
    return result

print(find_solutions(180,0))