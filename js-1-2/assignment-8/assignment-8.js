let startYear = prompt("Give the start year:");
let endYear = prompt("Give the end year:");

let yearList = [];

let x = 0;
let i = startYear;
while(i < endYear) {
    if(i % 4 == 0 && i % 100 != 0) {
    yearList[x] = i;
    x++;
}
else if(i % 4 == 0 && i % 100 == 0 && i % 400 == 0) {
    yearList[x] = i;
    x++;
}
i++;
}

for (let i = 0; i < yearList.length; i++) {
  document.querySelector("#target").innerHTML += "<li>" + yearList[i] + "</li>";
}