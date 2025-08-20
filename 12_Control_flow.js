let age = 15;
let name = "Sahal";
let favColor = "red";

if (age > 18) {
    console.log("Hello " + name + " you are adult");
} else if (age === 18) {
    console.log("wow " + name + " just became adult!!!");
} else {
    console.log(name + " is still young dont worry");
}

switch(favColor){
    case "red":
        console.log("red is danger color!!!");
        break;
    case "blue":
        console.log("blue is calm like water");
        break;
    case "green":
        console.log("green means goooo");
        break;
    default:
        console.log("idk this color man");
        break;
}

let number = 1;
while(number <= 3){
    console.log("number is " + number);
    number++;
}

for(let i=0; i<5; i++){
    console.log("for loop round: " + i);
}

function checkEvenOrOdd(num){
    if(num % 2 == 0){
        console.log(num + " is EVEN number");
    } else {
        console.log(num + " is ODD number");
    }
}

checkEvenOrOdd(10);
checkEvenOrOdd(7);

let score = 75;
if(score >= 50){
    if(score >= 90){
        console.log("Grade: A++");
    } else if(score >= 70){
        console.log("Grade: B");
    } else {
        console.log("Grade: C");
    }
} else {
    console.log("you FAILED");
}
