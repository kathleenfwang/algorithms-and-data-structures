
def threeSumClosest(nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        diff_que = [] 
        nums_que = []
        sum = 0 
        for i in nums: 
            diff = target - i 
            if len(diff_que) ==0:
                diff_que.append(diff)
                nums_que.append(i)
            else:
                first = diff_que[0]
                if abs(diff) < abs(first):
                    diff_que.insert(0,diff)
                    nums_que.insert(0,i)
                else:
                    diff_que.append(diff)
                    nums_que.append(i)
 
        for j in range(0,3):
            sum+=nums_que[j]
        return sum
nums = [-1,2,1,-4]
target = 2
print(threeSumClosest(nums,target))