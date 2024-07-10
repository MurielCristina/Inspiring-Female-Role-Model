function shareYourStory() {
  let name = prompt(`What is your name?`).toLowerCase().trim();
  let capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  let story = prompt(
    "Feel free to share with us your personal experience " + capitalizeName
  );
  return "Thanks for sharing " + capitalizeName + "!";
}
function thanksForSharing(event) {
  event.preventDefault();
  alert(shareYourStory());
  event.target.innerHTML = "Thanks for sharing!";
}

function thanksForVoting(event) {
  event.preventDefault();
  event.target.innerHTML = "Thanks for Voting!";
}

let shareButton = document.querySelector(".share-button");
shareButton.addEventListener("click", thanksForSharing);

let voteHereButton = document.querySelector(".vote-here");
voteHereButton.addEventListener("click", thanksForVoting);
