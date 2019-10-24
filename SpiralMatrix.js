const spiral2 = num => {
    let counter = 1; 

    let startRow = 0,
        endRow = num -1; 
    let startCol = 0, 
        endCol = num-1 

    let matrix = [] 

    for (let i = 0; i < num ; i++) {
        matrix.push([])
    }

    while ( startRow <= endRow ) {

        //first row 

        for (let i = startRow; i <= endRow; i++) {
            matrix[startRow][i] = counter; 
            counter ++ 
        }
       
       startCol++ 

        //last coll 
        for (let i = startCol; i <=endCol;i++) {
            matrix[i][endRow] = counter; 
            counter++ 
        }
        endRow -- 

        //last row 
        for (let i = endRow; i >= startRow; i--) {
            matrix[endCol][i] = counter; 
            counter++ 
        }
        endCol -- 

        //first coll
        for (let i = endCol;i >=startCol;i--) {
            matrix[i][startRow] = counter;
            counter++ 
        }
        startRow++ 
        console.log('end: ', startRow)
    }
    return matrix 
}

 
spiral2(5)