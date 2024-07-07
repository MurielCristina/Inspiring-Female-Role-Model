function playMusic() {}

function backgroudMusic() {
  let musicConsent = prompt(
    "Do you what to enter in a full Britney`s mode? (yes/no)"
  )
    .toLowerCase()
    .trim();
  if (musicConsent === "yes") {
    playMusic();
  }
}
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

let shareButton = document.querySelector(".share-button");
shareButton.addEventListener("click", thanksForSharing);

backgroudMusic();
