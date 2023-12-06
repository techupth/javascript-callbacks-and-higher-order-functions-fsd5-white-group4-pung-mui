//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  if (operation(array) >= 5) {
    return true;
  } else {
    return false;
  }
}

function pass70(scores) {
  let passStudent = 0;
  for (let i = 0; i < scores.length; i++)
    if (scores[i] >= 70) {
      passStudent++;
    }
  return passStudent;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, pass70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, pass70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, pass70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
