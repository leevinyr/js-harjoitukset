let numbers = [];

while(1 < 2) {
    let givenNumber = prompt("Give a number (0 to stop):");
    if(givenNumber == 0) {
        break;
    }
    else {
        numbers.push(givenNumber);
    }
}

numbers.sort((a, b) => b - a);

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}