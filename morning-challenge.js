// Morning Challenge:
// Find the smallest integer in a given array.
// function findSmallestInteger(array) {
//     let int = array[0]
//     for (let i = 1; i < array.length; i++){
//         if (int >= array[i]){
//             int = array[i]
//         }
//     }
//     return int
// }
// function findSmallestInteger(array) {
//     return Math.min(...array);
// }
// function findSmallestInteger(array) {
//     let int = array[0]
//     array.forEach((num) => {
//         int = num < int ? num : int
//     })
//     return int
// }