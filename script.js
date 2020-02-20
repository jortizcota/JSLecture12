let myGrades = [100, 100, 90, 73, 78, 94, 86];

 let myAverage = 0;

// i didn't start at zero
// i was going up 1 past the length size because i <= myGrades.length
for (let i = 0; i < myGrades.length; i++) {
  myAverage += myGrades[i];
}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

class InputError extends Error {}

function add(first, second) {
  if (isNaN(first) || isNaN(second)) {
    throw new InputError("Invalid input, must enter numbers.");
  } else if (first < 0 || second < 0) {
    throw new Error("Invalid input, number is less than 0.");
  } else if (first > 100 || second > 100) {
    throw new Error("Invalid input, number is more than 100.");
  }
  return first + second;
}

// console.log(add("fifteen", 3));
// console.log(add(104, 24));
// console.log(add(-25, 15));
console.log(add(23, 10));


while (true) {
  try {
    let result = add(first, second);
    console.log(result);
    break;
  } catch (error) {
    if (error instanceof InputError) {
      console.log(error.message);
    } else {
      console.log("a generic error occurred");
    }
  }
}
