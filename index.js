// Task: Create a F->C temp converter. User will enter their current temp in farenheit.


//Pop-up box allowing user to input Farenheit temp. Prompt outputs a string, so we then convert that to a number.
let farenheitTemp = prompt(`Enter Farenheit temperature and we'll convert it to Celcius!`);
farenheitTemp = Number(farenheitTemp);

let celsiusTemp = (num1) => {return (num1-32)*(5/9)};
celsiusTemp = celsiusTemp(farenheitTemp)

/*Created a function that will output a pop-up message to the user based on the specified temp. 
The `else if` statements allows each condition to be checked until it finds the one that suits it. 
If the condition is never met, nothing will happen.*/
const describeTemperature = (Temp2,Temp1) => {
if (Temp2<32) {alert(`${Temp1} is ${Temp2} in degrees Celsius, it is very cold outside`)}
else if (Temp2 < 64) {alert(`${Temp1} is ${Temp2} in degrees Celsius, it is cold outside`)}
else if (Temp2<86) {alert(`${Temp1} is ${Temp2} in degrees Celsius, it is warm outside`)}
else if (Temp2<100) {alert(`${Temp1} is ${Temp2} in degrees Celsius, it is hot outside`)}
else if (Temp2>=100) {alert(`${Temp1} is ${Temp2} in degrees Celsius, it is very hot outside`)}
}

// Invoking the function
describeTemperature(celsiusTemp,farenheitTemp)

/* All code above modified: My function used the names of my global variables, instead of a unique parameter name. 
This made it to where the function would only work with those specific values. Not ideal. 
Insetead we use placeholders, parameters, and then pass our global viariable as an argument when we invoke the function.*/ 