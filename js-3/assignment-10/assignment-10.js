let candidateCount = prompt("Give the amount of candidates:");

let candidateArr = [];

for(let i = 0; i < candidateCount; i++) {
    candidateArr.push({
        name: "",
        votes: 0
    });
}

for(let i = 0; i < candidateCount; i++) {
    let candidateName = prompt("Name for candidate " + (i + 1))
    candidateArr[i].name = candidateName;
}

let voterCount = prompt("Give the amount of voters:");

for(let i = 0; i < voterCount; i++) {
    let vote = prompt("Who will voter " + (i + 1) + " vote for (name):");
    let selectedCandidate = candidateArr.find(candidate => candidate.name === vote);
   
    if(selectedCandidate) {
        selectedCandidate.votes += 1;
    }
}

let mostVotes = candidateArr[0];

for(let i = 0; i < candidateArr.length; i++) {
    if(candidateArr[i].votes > mostVotes.votes) {
        mostVotes = candidateArr[i];
    }
    else {
        continue;
    }
}

let candidateArrSorted = candidateArr;

for(let i = 0; i < candidateArr.length; i++) {
    candidateArrSorted = candidateArr.sort((a, b) => b.votes - a.votes);
}

console.log("The winner is " + mostVotes.name + " with " + mostVotes.votes + " votes.");
console.log("results:");

for(let i = 0; i < candidateArrSorted.length; i++) {
    console.log(candidateArrSorted[i].name + ": " + candidateArrSorted[i].votes + " votes");
}