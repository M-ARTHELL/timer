//variable with command line arguments converted to array
let args = process.argv;

const timer = function(input) {
  //cuts process.argv excess off and sorts other contents in proper order
  input = input.slice(2).sort((a, b) => a - b);
  //converts all input into numbers or NaN
  input = input.map((x) => parseInt(x));
 
  for (let i = 0; i < input.length; i++) {
    //stops loop if NaN or negative number is found in input array
    if (input.includes(NaN) || input[i] < 0) {
      return console.log("Error: Input included NaN or negative number");
    } else {
      //otherwise converts numbers into milliseconds and sets alarms
      setTimeout(() => process.stdout.write('\x07'), input[i] * 1000);
    }
  }
};

//calls function with command line arguments
timer(args);