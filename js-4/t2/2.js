const list = document.querySelector("#target");

const li1 = document.createElement("li");
li1.innerText = ("First item");

const li2 = document.createElement("li");
li2.innerText = ("Second item");

const li3 = document.createElement("li");
li3.innerText = ("Third item");

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

document.querySelectorAll("li")[1].setAttribute("class", "my-item");