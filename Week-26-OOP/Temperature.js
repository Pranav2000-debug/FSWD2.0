class Temperature {
  constructor() {
    this.celsius = 0;
    this.farhenheit = 32;
  }
  get getCelsius() {
    return this.celsius;
  }
  set setCelsius(value) {
    if (typeof value === 'number') {
      this.celsius = value;
      this.fahrenheit = (value * 9) / 5 + 32;
    } else {
      console.log(
        "Invalid input. Please provide a number for Celsius temperature."
      );
    }
  }

  get getFahrenheit() {
    return this.fahrenheit;
  }
  set setFahrenheit(value) {
    if (typeof value === "number") {
      this.fahrenheit = value;
      this.celsius = ((value - 32) * 5) / 9;
    } else {
      console.log(
        "Invalid input. Please provide a number for Fahrenheit temperature."
      );
    }
  }
}
const newTemp = new Temperature();

console.log(`Initail Celsius: ${newTemp.getCelsius}°C`);
console.log(`Initail Farhenheit: ${newTemp.getFahrenheit}°F`);

newTemp.setCelsius = 25;
console.log(`Celsius: ${newTemp.getCelsius}°C`); 
console.log(`Fahrenheit: ${newTemp.getFahrenheit}°F`); 

newTemp.setFahrenheit = 68;
console.log(`Celsius: ${newTemp.getCelsius}°C`); 
console.log(`Fahrenheit: ${newTemp.getFahrenheit}°F`); 

