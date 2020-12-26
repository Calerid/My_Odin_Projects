let googleClickListener = document.

function googleClick() {
  let feelingLucky = document.getElementById("right-button").innerHTML;
  var replacedString = feelingLucky.replace("Lucky", randomLucky());
  document.getElementById("right-button").innerHTML = replacedString;
}

function randomLucky() {
  let feeling = ["Hungry", "Happy", "Healthy", "Lovey"];
  let randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
  return randomFeeling;
}
