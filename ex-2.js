//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let passingScoreCount = 0; // declare variable passingScoreCount กำหนด value เป็น 0
  for (let i = 0; i < array.length; i++) {
    // ใช้ for loop วน loop ค่าใน array
    if (operation(array[i]) > 70) {
      // ถ้า operation(array[i]) มากกว่า 70
      passingScoreCount++; // ให้ passingScoreCount นับเพิ่ม 1
    }
  }
  return passingScoreCount >= 5; // ถ้า passingScoreCount มากกว่าหรือเท่ากับ 5 ให้ return true ถ้าน้อยกว่าให้ return false
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, (score) => score); // callback function รับค่า score และ return score ออกมา
scoreRoom2Result = atLeastFive(studentScoresRoom2, (score) => score);
scoreRoom3Result = atLeastFive(studentScoresRoom3, (score) => score);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
