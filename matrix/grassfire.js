// grassfire.js

module.exports = {
    // Finds shortest path from source cell to destination cell
    // in a matrix, where 0s represent open spaces, 1s represent walls,
    // 2 represent source and 3 represent destination
    grassfire: function (a) {
        if (a.length > 1) { // Requires minimum 2 rows to work with
            let rows = a.length;
            let columns = a[0].length;

            let sR, sC; // Source row and column
            let dR, dC; // Destination row and column

            // Locate source and destination cells
            for (let r = 0; r < rows; r += 1) {
                for (let c = 0; c < columns; c += 1) {
                    if (a[r][c] == 2) {
                        sR = r;
                        sC = c;
                        // Mark source cell with a unique value
                        a[sR][sC] = Number.MIN_SAFE_INTEGER;
                    } else if (a[r][c] == 3) {
                        dR = r;
                        dC = c;
                    }
                }
            }

            return module.exports.doGrassfire(a, sR, sC, dR, dC, rows, columns);
        }

        return [];
    },

    // Performs grassfire algorithm for given source
    // destination cells in a matrix.
    doGrassfire: function(a, sR, sC, dR, dC, rows, columns) {
        let path = [];

        let stack = [];
        stack.push([dR, dC]);

        while (stack.length > 0) {
            let cell = stack.pop();
            // console.log('Processing: ' + cell);
            let r = cell[0];
            let c = cell[1];
            let d = a[r][c]; // Distance of current node
            if (r == dR && c == dC) d = 0;

            // Check if one of the neighbors is source node
            if (r > 0 && a[r - 1][c] == Number.MIN_SAFE_INTEGER) break;
            if (r < rows - 1 && a[r + 1][c] == Number.MIN_SAFE_INTEGER) break;
            if (c > 0 && a[r][c - 1] == Number.MIN_SAFE_INTEGER) break;
            if (c < columns - 1 && a[r][c + 1] == Number.MIN_SAFE_INTEGER) break;

            // If not, continue processing the neighbors
            let neighbors = [];

            // Mark top
            if (r > 0 && a[r - 1][c] == 0) {
                a[r - 1][c] = d + 1;
                neighbors.push([r - 1, c]);
            }

            // Mark bottom
            if (r < rows - 1 && a[r + 1][c] == 0) {
                a[r + 1][c] = d + 1;
                neighbors.push([r + 1, c]);
            }

            // Mark left
            if (c > 0 && a[r][c - 1] == 0) {
                a[r][c - 1] = d + 1;
                neighbors.push([r, c - 1]);
            }

            // Mark right
            if (c < columns - 1 && a[r][c + 1] == 0) {
                a[r][c + 1] = d + 1;
                neighbors.push([r, c + 1]);
            }

            // console.log('Neighbors: ' + neighbors.join('; '));

            // Find the cell with shortest distance
            let minNeighbor = [];
            for (let i = 0; i < neighbors.length; i += 1) {
                let n = neighbors[i];

                if (minNeighbor.length == 0) {
                    minNeighbor = n;
                } else {
                    if (a[minNeighbor[0]][minNeighbor[1]] > a[n[0]][n[1]]) {
                        minNeighbor.length = 0;
                        minNeighbor.concat(n);
                    }
                }

                stack.push(n);
                // a[n[0]][n[1]] = Number.MAX_SAFE_INTEGER; // Mark as visited
                // console.log(minNeighbor + ': ' + a[minNeighbor[0]][minNeighbor[1]]);
            }

            // console.log('Stack: ' + stack.join('; '));
            if (minNeighbor.length > 0) {
                // console.log('Adding to path: ' + minNeighbor);
                path.push(minNeighbor);
            }
        }

        a[sR][sC] = 2 // Restore source cell
        path.splice(0, 0, [dR, dC]); // Add destination to path
        path.push([sR, sC]); // Add source to path
        return path;
    }
};
