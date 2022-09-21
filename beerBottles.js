// // create a function that will return the number of bottles on the wall, famous song "99 Bottles of beer on the wall".
// // this will have two numbers the current count and the new count
// // use a while loop and decrement accordingly

// // Ex:
// // 99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.
// // concat `${count} + " bottles of beer on the wall, " + ${count} + " bottles of beer. Take one down and pass it around, "${takeOneDown} + " bottles of beer on the wall."`

// // Input: count with a string
// // Output: new count with string

// // current count of bottles
// // current count of bottles - 1 bottle (count--)

// // let count = 99;
// let takeOneDown = [];

// // console.log(takeOneDown);

// function beerOnTheWall() {
//   for (let count = 99; count >= 1; count--) {
//     // takeOneDown.push(count - 1);

//     if (count >= 0) {
//       console.log(
//         count +
//           " bottles of beer on the wall, " +
//           count +
//           " bottles of beer. Take one down and pass it around, " +
//           takeOneDown +
//           " bottles of beer on the wall."
//       );
//     }
//   }

//   //  else if (count >= 1) {
//   //   console.log(
//   //     `${count} + " bottle of beer on the wall, " + ${count} + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."`
//   //   );
//   // } else if (count === 0) {
//   //   console.log(
//   //     " No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
//   //   );
//   // }
// }
// console.log(beerOnTheWall());
