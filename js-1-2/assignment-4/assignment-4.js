let name = prompt("Give your name:");

let room = Math.random();

if(room >= 0 && room < 0.25) {
    document.querySelector('#target').innerHTML = name + ", you are Gryffindor.";
}
else if(room >= 0.26 && room < 0.5) {
    document.querySelector('#target').innerHTML = name + ", you are Slytherin.";
}
else if(room >= 0.51 && room < 0.75) {
    document.querySelector('#target').innerHTML = name + ", you are Hufflepuff.";
}
else if(room >= 0.76 && room <= 1) {
    document.querySelector('#target').innerHTML = name + ", you are Ravenclaw.";
}