console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    count = prompt("pick a number");
    if (count < 0){
        for (let i = 1; i >= count; i--){
            if (i % 2 != 0){
                console.log(i);
            }
        }
    }else{
        for (let i = 1; i <= count; i++){
            if (i % 2 != 0){
                console.log(i);
            }
        }
    }
}
printOdds();
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let userName;
let age;
function checkAge(userName,age){

    userName = prompt("What is your name?");
    age = prompt("What is your age?");
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait untill you're 16`;

    if (age > 16){
         console.log(aboveSixteen);
    }else{
        console.log(belowSixteen);
    }
}
checkAge();

console.log("EXERCISE 3:\n==========\n");
let x;
let y;
function whichPlane(x, y){
    x = prompt("whats the first number on your axis");
    y = prompt("whats the second number on your axis");

    if (x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if (x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if (x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if (x > 0 && y < 0){
        return "Quadrant 4";
    }
    else if (x == 0 && y != 0){
        return "X Axis";
    }
    else if (x != 0 && y == 0){
        return "Y Axis";
    }
    else{
        return "Origin";
    }
}
console.log(whichPlane(x, y));

console.log("EXERCISE 4:\n==========\n");
let a;
let b;
let c;
function isATriangle(a, b, c){
    a = prompt("enter in a number");
    b = prompt("enter in a number");
    c = prompt("enter in a number");

    let aTriangle = a + b > c && b + c > a && c + a > b

    if (aTriangle){
        if (a == b && b == c){
            console.log(`${a}, ${b}, ${c} make a equilateral triangle.`);
        }
        else if (a == b || b == c || a == c){
            console.log(`${a}, ${b}, ${c} make a isosceles triangle.`);
        }
        else{
            console.log(`${a}, ${b}, ${c} make a scalene triangle.`);
        }
    }else{
        console.log(`${a}, ${b}, ${c} make an ivalid triangle.`);
    }
}
isATriangle();

console.log("EXERCISE 5:\n==========\n");
let planLimit;
let day;
let usage;
function cellPhone(planLimit, day, usage){

    planLimit = prompt("What is the data limit on your plan?")
    day = prompt("Whats the current day since your last billing cycle?(out of 30 days)")
    usage = prompt("How much data have you used so far?")

    let periodLength = 30;
    let currentAvg = usage / day;
    let futureDailyAvg = planLimit / periodLength;
    let daysLeft = periodLength - day;
    let dataLeft = planLimit - usage;
    let projectedUsage = daysLeft * currentAvg;
    let statusMsg;

    if (currentAvg > futureDailyAvg){
        statusMsg = "EXCEEDING";
    }else if (currentAvg < futureDailyAvg){
        statusMsg = "UNDER";
    }else {
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${daysLeft} day(s) remaining Average daily use: ${futureDailyAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)}) GB/day, 
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} 
    GB from your data limit. To stay below our data plan, use no more than 
    ${(dataLeft / daysLeft).toFixed(2)} GB/day.`)
}
cellPhone();