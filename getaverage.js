// // Question:
// // Write a function that takes in an array of integers and returns an object with keys minimum, maximum, average with correct values.

// // ====================================================

// // Solution(s):
// const getAverages = (arr) => {
//     let object = {
//         max: arr[0],
//         min: arr[0],
//         avg: 0
//     }
//     arr.forEach(item => {
//         if (item > object.max) {
//             object.max = item
//         }
//         if (item < object.min) {
//             object.min = item
//         }
//         object.avg += item
//     })
//     object.avg = object.avg / arr.length
//     return object
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // console.log(arr)
// // console.log(getAverages(arr))

// // using reduce
// // important with this is using the initialValue for the accumulator (which would be the object that needs to be returned)
// const reduceAverages = (arr) => {
//   let object = arr.reduce((obj, item) => {
//     if (item > obj.max) {
//       obj.max = item
//     }
//     if (item < obj.min) {
//       obj.min = item
//     }
//     obj.avg += item;
//     return obj;
//   }, {max: arr[0], min: arr[0], avg: 0})
//   object.avg = object.avg / arr.length
//   return object;
// }
// let newArr = [1, 6, 4, 8, 2, 9, 0, 12]

// // console.log(newArr)
// // console.log(reduceAverages(newArr))
