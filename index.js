//1. Print all even numbers from 0 – 10
const numbers = [0,1,2,3,4,5,6,7,8,9,10];
const evenNumbers = (e) => {
    return  e.filter(num => num % 2 === 0);
}
console.log('Even numbers of the array: '+evenNumbers(numbers));

//2. Print a table containing multiplication tables
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
const multiplication = arrayOfNumbers.map(num => num * 2);
console.log(multiplication);

//3. Create a converter function from kilometers to miles and celsius to fahrenheit
const kmToMileConverter = (km) => {
    const miles = km * 0.621371;
    return `${km} kilometers is equal to ${miles} miles.`;
  }
  console.log(kmToMileConverter(2));

  const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = celsius * 1.8 + 32;
    return `${celsius} celsius is equal to ${fahrenheit} fahrenheit.`;
  }
  console.log(celsiusToFahrenheit(20));

//4. Calculate the sum of numbers within an array
const numberArray = [1,2,3,4,5,6,7,8,9,10];
const sumOfArray = numberArray.reduce((acc, curr) => acc + curr);
console.log('Sum of array: '+sumOfArray);

//5. Create a function that reverses an array
const reverseArray = [1,2,3,4,5,6,7,8,9,10];
const reverseResult = reverseArray.reverse();
console.log('Reversed array: '+reverseResult);

//6. Sort an array from lowest to highest
const sortArray = [11,20,33,44,1,2,32,29];
const sortNumbers = sortArray.sort((a,b) => a-b);
console.log('Array sorted from lowest to highest: '+sortNumbers);

//7. Create a function that filters out negative numbers
const arrayWithNegativeNumbers = [-11,20,-33,44,-1,2,32,29];
const filterNegatives = () =>  {
    return arrayWithNegativeNumbers.filter(num => num >= 0);
} 
console.log('Array without negative numbers: '+filterNegatives(arrayWithNegativeNumbers));


//8. Remove the spaces found in a string
//9. Return a Boolean if a number is divisible by 10
//10. Return the number of vowels in a string