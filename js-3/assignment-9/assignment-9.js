let newArray = [];
arr = [];


function even(arr) {
    newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            newArray.push(arr[i]);
        }
        else {
            continue;
        }
    }

    return newArray;
}

console.log(arr);
console.log(even(arr));