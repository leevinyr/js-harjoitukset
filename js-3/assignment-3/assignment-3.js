let dog1 = prompt("Give the name of dog 1:");
let dog2 = prompt("Give the name of dog 2:");
let dog3 = prompt("Give the name of dog 3:");
let dog4 = prompt("Give the name of dog 4:");
let dog5 = prompt("Give the name of dog 5:");
let dog6 = prompt("Give the name of dog 6:");

dogs = [dog1, dog2, dog3, dog4, dog5, dog6];
dogs.sort();

for(let i = dogs.length - 1; i > -1; i--) {
    document.querySelector("#target").innerHTML += "<li>" + dogs[i] + "</li>";
}