let temperature = prompt(`Enter Farenheit temperature and we'll convert it to Celcius!`);
temperature = Number(temperature);

let celsiusTemp = (num1) => {return (num1-32)*(5/9)};
celsiusTemp = celsiusTemp(temperature)

const describeTemperature = () => {
if (celsiusTemp<32) {alert(`${temperature} is ${celsiusTemp} in degrees Celsius, it is very cold outside`)}
else if (celsiusTemp < 64) {alert(`${temperature} is ${celsiusTemp} in degrees Celsius, it is cold outside`)}
else if (celsiusTemp<86) {alert(`${temperature} is ${celsiusTemp} in degrees Celsius, it is warm outside`)}
else if (celsiusTemp<100) {alert(`${temperature} is ${celsiusTemp} in degrees Celsius, it is hot outside`)}
else if (celsiusTemp>=100) {alert(`${temperature} is ${celsiusTemp} in degrees Celsius, it is very hot outside`)}
}

describeTemperature(celsiusTemp)