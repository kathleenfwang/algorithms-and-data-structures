function directionReduction(directions) {
        let directionDictionary = {NORTH: "SOUTH", SOUTH: "NORTH", WEST: "EAST", EAST: "WEST"} 
        // loop through directions and store the directions in a stack 
        // if the current element is an opposite of last element in stack, remove that element 
        // return the stack 
        let stack_result = [directions[0]] 
        for (let i =1;i<directions.length;i++) {
            let last = stack_result[stack_result.length -1] 
            // last element added: north, if the current element is south: 
            if (directions[i] === directionDictionary[last]) {
                // remove the last stack element 
                // don't add anything to the new stack
                stack_result.pop() 
                // now move i back to check if the current
            }
            else {
                stack_result.push(directions[i])
            }
        }
        return stack_result
    } 