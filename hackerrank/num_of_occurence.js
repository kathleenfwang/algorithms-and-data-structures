function findNumberWithNOccurrences(numbers, n) {
        // store the numbers in an dictionary based on frequency 
        // loop through dictionary to find if value matches n 
        let dic = {} 
        for (let i =0;i < numbers.length;i++) {
            let num = numbers[i]
            if (dic[num]) dic[num] +=1 
            else {
                dic[num] = 1 
            }
        }
        console.log(dic)
        for (let j in dic) {
            if (dic[j] === n) {
                console.log(j)
                return j 
            }
        }
    
    }
    