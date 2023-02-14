var btn = document.getElementById("btn");
var num = document.getElementById("num");
var res=  document.getElementById("respond");
var guess= document.getElementById("guess").value;
function randomNumGenerator() {
  randomNum = Math.floor(Math.random() * 41) - 20;
  document.getElementById("num").innerText = randomNum;
  guessNum();
  print();
}

function guessNum() {
  guess = Number(document.getElementById("guess").value);
}
function print() {
  if (Math.abs(randomNum - guess) <= 5) {
    document.getElementById("respond").innerText = "Hot";
  } else {
    document.getElementById("respond").innerHTML = "Cold";
  }
}
btn.addEventListener("click",randomNumGenerator);
