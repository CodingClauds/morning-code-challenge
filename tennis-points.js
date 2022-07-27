// // ================== tennisPoints ======================

// // Question:
// // Your friend has invited you to watch a tennis match at a local sports club. Since tennis isn't your favorite sport, you get bored right at the start of the first game and start looking for something to keep yourself entertained. Noticing the scoreboard, you realize you don't even know how many points have been won since the game started.

// // If you are not familiar with tennis rules, here's a short description of its scoring system. Score calling is unique in tennis: each point has a corresponding call that is different from its point value. The table of points won and corresponding calls is given below.

// // +----------------------+--------------------+
// // | Number of points won | Corresponding call |
// // +----------------------+--------------------+
// // |          0           |      "love"        |
// // +----------------------+--------------------+
// // |          1           |       "15"         |
// // +----------------------+--------------------+
// // |          2           |       "30"         |
// // +----------------------+--------------------+
// // |          3           |       "40"         |
// // +----------------------+--------------------+
// // There's an additional rule to remember: when players are tied by one or two points, the score is described as "15-all" and "30-all", respectively.

// // A string in the format <p1>-<p2> representing a valid score, where <p1> is the first player's score, and <p2> is the second player's score. "15-all" or "40-love".

// // Create a function that will calculate the number of points won in the game given the current score.

// // ======================================================

// const input1 = "15-30";
// const input2 = "30-all";
// const input3 = "40-love";

// function getPoints(input) {
//   const legend = ["love", "15", "30", "40"]; // 0, 1, 2, 3

//   const scores = input.split("-");
//   let output = [];

//   if (scores[1] === "all") {
//     output.push(scores[0], scores[0]);
//   } else {
//     output.push(scores[0], scores[1]);
//   }

//   output[0] = legend.indexOf(output[0]);
//   output[1] = legend.indexOf(output[1]);

//   return output;
// }

// function getPoints2(input) {
//   const legend = ["love", "15", "30", "40"]; // 0, 1, 2, 3

//   const scores = input.split("-");
//   const output = [legend.indexOf(scores[0])];
//   output[1] = scores[1] === "all" ? output[0] : legend.indexOf(scores[1]);

//   return output;
// }

// console.log(getPoints2(input2));
// console.log(getPoints2(input3));
// console.log(getPoints2(input1));
