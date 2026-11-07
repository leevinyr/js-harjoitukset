function rollDie() {
    return (Math.floor(Math.random() * 6 + 1))
}

while(1<2) {
    let result = rollDie()
    if(result == 6) {
        document.querySelector("#target").innerHTML += "<li>" + result + "</li>";
        break;
    }
    else if(result < 6) {
        document.querySelector("#target").innerHTML += "<li>" + result + "</li>";
    }
}