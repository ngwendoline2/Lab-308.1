
// // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;
// console.log(isSum50); //this is true
// console.log('-----------')

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// console.log(isTwoOdd);
// console.log('-------------')

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 < 25 || n2 > 25 || n3 > 25 || n4 > 25;
// console.log(isOver25);
// console.log('--------------')

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
// console.log(isUnique);
// console.log('--------------')

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;
// console.log(isValid);


// // Finally, log the results.
// console.log(isValid);

// //Check if all numbers are divisible by 5. Cache the result in a variable.
// let allDivisibleby5 = true
// console.log(allDivisibleby5);

// //Check if the first number is larger than the last. Cache the result in a variable
// let n1Islargerthann4 = true
// console.log(n1Islargerthann4);

// //Accomplish the following arithmetic chain:
// //Subtract the first number from the second number.
// let theresult = n2 - n1;
// console.log(theresult);

// //Multiply the result by the third number.
// let result = theresult * n3;
// console.log(result);

// //Find the remainder of dividing the result by the fourth number.
// let theAnswer = (100 / n4) %2;
// console.log(theAnswer);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// Part2
//You have a fuel budget of $175.
//The average cost of fuel is $3 per gallon.
//Set up a program to answer the following questions:

const A = 1500;
const B = 3;
const C = 175;

//The distance of the trip, in total, is 1,500 miles.
//Your car’s fuel efficiency is as follows:

//At 55 miles per hour, you get 30 miles per gallon.
//a, How many gallons of fuel will you need for the entire trip

// let gallons = (A / 30);
// console.log(gallons);
// ans=50//

// b, Will your budget be enough to cover the fuel expense?
// let budget = B *gallons;
// console.log(budget);
// ans=150// can aford

// c, How long will the trip take, in hours?
// let time = A / 55;
// console.log(time);
//27.272727272727273 =27//


// At 60 miles per hour, you get 28 miles per gallon.
// let gallons = (A / 28);
// console.log(gallons);
// ans = 53.57142857142857 = 54//

// b, Will your budget be enough to cover the fuel expense?
// let budget = B *gallons;
// console.log(budget);
// ans = 160.71428571428572 =161//

//c, How long will the trip take, in hours?
// let time = (A / 60);
// console.log(time);
// ans = 25 //

//At 75 miles per hour, you get 23 miles per gallon.
// let gallons = (A / 23);
// console.log(gallons);
// //ans = 65.21739130434783//

// //b, Will your budget be enough to cover the fuel expense?
// let budget = B *gallons;
// console.log(budget);
// // ans = 195.6521739130435 = 196//

// //c, How long will the trip take, in hours?
// let time = (A / 75);
// console.log(time);
// ans = 20//

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
//Log the results of your calculations using string concatenation or template literals.

// // Answers in string concentation
// console.log('At 55mph' + ' we need 50 gallons of gas')
// console.log('At $3/gal' + '50 gallons would cost us $150')
// console.log('At 55mph' + 'it will take us 27.27 hours to travail 1500 miles')

// console.log('At 60mph' + ' we need 53.57 gallons of gas')
// console.log('At $3/gal' + '53.57 gallons would cost us $160.7')
// console.log('At 60mph' + 'it would take us 25 hours to travail 1500 miles')

// console.log('At 75mph' + ' we need 65.22 gallons of gas')
// console.log('At $3/gal' + ' 65.22 gallons would cost us $195.67 - this example , we cannot afford')
// console.log('At 75mph' + ' it would take us 20 hours to travail 1500 milles')



