let arr = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(arr) {
    string = ""
    for(let i = 0; i < arr.length; i++) {
        string += arr[i];
    }

    return string;
}

document.querySelector("#target").innerHTML = concat(arr);