const prompt = require("prompt-sync")({ sigint: true });

//Very easy
var success = 10;
var osiel = 5;
var result = success - osiel;
console.log(`The difference between Success(10) and Osiel(5) is ${result}`);

//Easy
var odoemena = "Odoemena";
var torres = "Torres";
console.log(
  `${odoemena}'s name is longer than ${torres} by ${
    odoemena.length - torres.length
  } `
);

//Medieum
function shoutOrWhisper() {
  console.log("Enter your message");
  let input = prompt();

  if (input === input.toUpperCase()) {
    result = "You are shouting";
  } else if (input === input.toLowerCase()) {
    result = "You are whispering";
  } else {
    result = "You are speaking normally";
  }
  console.log(result);
}

//Hard
const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

const multply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

//Very hard
function calc() {
  console.log(
    "Select your operation by typing in one of the following:\n+\n-\n*\n/"
  );
  var input1 = prompt();

  console.log(" Enter first number ");
  var input2 = Number(prompt());

  console.log(" Enter second number ");
  var input3 = Number(prompt());

  switch (input1) {
    case "+":
      result = add(input2, input3);
      console.log(`${input2} ${input1} ${input3} = ${result}`);
      break;

    case "-":
      result = sub(input2, input3);
      console.log(`${input2} ${input1} ${input3} = ${result}`);
      break;

    case "*":
      result = multply(input2, input3);
      console.log(`${input2} ${input1} ${input3} = ${result}`);
      break;

    case "/":
      if (input3 == 0) {
        console.log("Dvisor cannot be 0");
        return;
      }
      result = divide(input2, input3);
      console.log(`${input2} ${input1} ${input3} = ${result}`);
      break;

    default:
        console.log("Invalid operand input")
      break;
  }
}
