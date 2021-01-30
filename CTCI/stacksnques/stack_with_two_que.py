from queue import Queue 

class Stack:
    def __init__(self):
        self.que1 = Queue() 
        self.que2 = Queue() 
    def push(self,x):
        # que1 should only hold the newest item only 
        # otherwise if que1 already has something, push to que2 
        if self.que1.empty():
            self.que1.put(x)
        else:
            self.que2.put(self.que1.get())
            self.que1.put(x) 
    def pop(self):
        self.que1.get()
    def size(self):
        print(self.que1.qsize() + self.que2.qsize())
    def get_top(self):
        print(self.que1.queue[0], end =" ")
    def print(self):
        for i in self.que2.queue:
            print(i, end =" ")
        self.get_top()
             
s = Stack()
s.push(1)
s.push(2)
s.push(3)
 
s.print()
 
