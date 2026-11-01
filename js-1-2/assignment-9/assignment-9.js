let number = Number(prompt("Give an integer:"));

let isPrime = number >= 2;

for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

document.querySelector("#target").innerHTML =
    number + (isPrime ? " is a prime number." : " is not a prime number.");