let numbers = [];

while(1<2) {
    let givenNumber = prompt("Give a number:");
    if(numbers.includes(givenNumber)) {
        console.log("This number has already been given.");
        break;
    }
    else {
        numbers.push(givenNumber);
    }
}

numbers.sort((a, b) => a - b);

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}