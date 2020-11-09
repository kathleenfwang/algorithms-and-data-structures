// This question is asked by Microsoft. Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
// Note: a moving average is the average of a subset of data at a given point in time.

// Ex: Given the following series of events...

// // i.e. the moving average has a capacity of 3.
// MovingAverage movingAverage = new MovingAverage(3);
// m.next(3) returns 3 because (3 / 1) = 3
// m.next(5) returns 4 because (3 + 5) / 2 = 4 
// m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
// m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6
function p(stuff) {
    console.log(stuff)
}
class MovingAverage {
    constructor() {
        this.items = []
        this.length = 0 
        this.MAX = 3 
    }
    // once length goes over max, and new one is added to end,take off the first one, so this uses a que data structure (FIFO)
    next(item) {
        this.items.push(item) 
        this.length++ 
        if (this.length > this.MAX) {
            this.items.shift()
            this.length--
            return this.average()
        }
        return this.average(this.length)
        
    }
    average() {
        let sum = 0 
        this.items.forEach((x) => {
            sum+=x
        } )
        return sum / this.length 
    }
}
let m = new MovingAverage();
p(m.next(3))  
p(m.next(5))  
p(m.next(7)) 
p(m.next(6))
// m.next(3) returns 3 because (3 / 1) = 3
// m.next(5) returns 4 because (3 + 5) / 2 = 4 
// m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
// m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6