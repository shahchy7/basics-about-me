const funFactAboutMe = [
  "I am a wannabe coder",
  "I don't know any programming language",
  "I hate tomato"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateFact() {
  const elem = document.getElementById("fact-target");
  const randomIndex = getRandomInt(funFactAboutMe.length);
  elem.innerText = funFactAboutMe[randomIndex];
}

updateFact();
