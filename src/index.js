
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((typeof matrix == "undefined") || (matrix.length === 0)) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i%2 !== 0) {
      matrix[i].reverse();
    }
  }
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newArray.push(matrix[i][j]);
    }
  }
  return newArray; 
}
