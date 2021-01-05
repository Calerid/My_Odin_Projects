var feelingLucky = document.getElementById("right-button").innerHTML;

feelingLucky.addEventListener("onclick", randomLucky());

function randomLucky() {
  let feeling = ["Hungry", "Happy", "Healthy", "Lovey"];
  let randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
  let replacedString = feelingLucky.replace("Lucky", randomLucky);
  feelingLucky = replacedString;
}
