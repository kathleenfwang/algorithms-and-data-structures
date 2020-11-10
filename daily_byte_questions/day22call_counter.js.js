// Create a class CallCounter that tracks the number of calls a client has made within the last 3 seconds. Your class should contain one method, ping(int t) that receives the current timestamp (in milliseconds) of a new call being made and returns the number of calls made within the last 3 seconds.
// Note: you may assume that the time associated with each subsequent call to ping is strictly increasing.

// Ex: Given the following calls to ping…

// ping(1), return 1 (1 call within the last 3 seconds)
// ping(300), return 2 (2 calls within the last 3 seconds)
// ping(3000), return 3 (3 calls within the last 3 seconds)
// ping(3002), return 3 (3 calls within the last 3 seconds)
// ping(7000), return 1 (1 call within the last 3 seconds)

class CallCounter {
    constructor() {
        this.calls = []
    }

    ping(int) {
        this.calls.push(int) 
        while (this.peek() < int - 3000) {
            this.calls.shift()
        }
        return this.calls.length
    }
    peek() {
        return this.calls[0]
    }
}
let c = new CallCounter 
c.ping(1) 
c.ping(300) 
c.ping(3000) 
console.log(c.ping(3002) )

