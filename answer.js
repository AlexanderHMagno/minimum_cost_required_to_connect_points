/*
 * We need to calculate the distance between these points, 
 * as we have to be agnostics with the distances, we need to calculate all relationships
*/
const createMatrix = points => {

    const matrix = [];
    
    for(let i = 0; i < points.length ; i ++) {
        for (let j = 0; j < points.length ; j ++) {
            const xDelta = Math.abs(points[i][0] - points[j][0]);
            const yDelta = Math.abs(points[i][1] - points[j][1]);
            let manhattan = (xDelta + yDelta);

            if(matrix[i] == null) matrix.push([]);
            // if (manhattan == 0) manhattan = Infinity;
            
            matrix[i].push(manhattan);
        }
    }

    return matrix; 
    
}


/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    
    //Create a matrix for each point 
    const matrix = createMatrix(points);
    const vertexes = points.length; 
    const maxEdges = vertexes - 1; 
    const included = new Array(vertexes).fill(0);
    let answer = 0;

    //lets assume each vertex is represented by its index
    included[0] = 1;


    for (let k = 0; k < maxEdges; k++) {
        let minimum = Infinity;
        let row,col = 0;

        for (let i = 0; i < vertexes ; i++) {
            if (included[i]) {
                for (let j = 0; j < vertexes ;j++) {
                    if (!included[j] && matrix[i][j]) {
                        if (minimum > matrix[i][j] ) {
                            minimum = matrix[i][j];
                            row = i;
                            col = j;
                        }
                    }
                }
            }
        }

        answer +=  matrix[row][col];
        included[col] = 1;

    } 

    return answer;

};
