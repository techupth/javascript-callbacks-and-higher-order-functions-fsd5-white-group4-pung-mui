// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    // ใช้ for loop วนลูปค่าใน array
    operation(array[i]); // เรียกใช้งาน function operation และเอา array[i] มาเป็น argument
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, function (salary) {
  // เรียกใช้งาน function forEach และเอา employeeSalaries กับ anonymous function มาเป็น argument
  newEmployeeSalaries.push(salary + 5000); // เอาค่า salary + 5000 และนำผลลัพธ์มา push ใน newEmployeeSalaries
});

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
