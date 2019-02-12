// test-matrix.js

var grassfire = require('../matrix/grassfire');

testGrassfire();

function testGrassfire() {
    let a = [
        [0, 2, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 3, 0],
        [1, 1, 0, 0, 0, 0]
    ];

    let path = grassfire.grassfire(a);
    console.log('Shortest Path: ' + path.join(' -> '));
    console.log('Matrix:\n' + a.join('\n'));
}
