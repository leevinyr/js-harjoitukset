let sides = prompt("Enter die side count:");

function rollDie(sides) {
    return (Math.floor(Math.random() * sides) + 1);
}

while(1<2) {
    let result = rollDie(sides);
    if(result == sides) {
        document.querySelector("#target").innerHTML += "<li>" + result + "</li>";
        break;
    }
    else if(result < sides) {
        document.querySelector("#target").innerHTML += "<li>" + result + "</li>";
    }
}