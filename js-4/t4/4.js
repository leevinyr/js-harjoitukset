'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for(let i = 0; i < students.length; i++) {
  let opt = document.createElement("option");
  opt.setAttribute("value", students[i].id);
  opt.innerText = students[i].name;
  document.querySelector("#target").appendChild(opt);
}