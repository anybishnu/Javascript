console.log("IPL Winner Predictor");

let button = document.querySelector("button");
let showText = document.querySelector("h3");
let teamArr = [
  { team: "🏆 Winner: Chennai Super Kings (CSK)! 🎉" },
  { team: "🏆 Winner: Delhi Capitals (DC)! 🎉" },
  { team: "🏆 Winner: Gujarat Titans (GT)! 🎉" },
  { team: "🏆 Winner: Kolkata Knight Riders (KKR)! 🎉" },
  { team: "🏆 Winner: Lucknow Super Giants (LSG)! 🎉" },
  { team: "🏆 Winner: Mumbai Indians (MI)! 🎉" },
  { team: "🏆 Winner: Punjab Kings (PBKS)! 🎉" },
  { team: "🏆 Winner: Rajasthan Royals (RR)! 🎉" },
  { team: "🏆 Winner: Royal Challengers Bengaluru (RCB)! 🎉" },
  { team: "🏆 Winner: Sunrisers Hyderabad (SRH)! 🎉" },
];

button.addEventListener("click", function () {
  let randomTeam = Math.floor(Math.random() * teamArr.length);
  randomTeams = teamArr[randomTeam];
  random = randomTeams.team;
  showText.textContent = random;
});
