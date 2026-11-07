let participantCount = prompt("Give the number of participants:");

let participants = [];

for(let i = 0; i < participantCount; i++) {
    let participantName = prompt("Give the name of participant " + (i + 1) + ":");
    participants.push(participantName);
}

participants.sort();

for(let i = 0; i < participants.length; i++) {
    document.querySelector("#target").innerHTML += "<li>" + participants[i] + "</li>"
}