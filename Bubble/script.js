function bubble() {

  var value = " "
  for (var i = 0; i < 160; i++) {


    var rn = Math.floor(Math.random() * 10);
    value += `<div class="boll">${rn}</div>`;

    document.querySelector(".bot").innerHTML = value
  }
}
var hitval = 0;
function gethit() {
  hitval = Math.floor(Math.random() * 10);
  document.querySelector("#hit1").textContent = hitval;

}
var score1 = 0;
function getscore() {
  score1 += 10;
  document.querySelector("#score1").textContent = score1;

}
var timer = 60;
function runtime() {
  tim = setInterval(function () {
    if (0 < timer) {
      timer--;
      document.querySelector("#time1").textContent = timer;
    }
    else {
      clearInterval(timer);
      document.querySelector(".bot").innerHTML = " ";
      document.querySelector(".bot").innerHTML = `<h1> GAME OVER</h1>   <h1> ${score1}</h1>`;
      document.querySelector("h1").style.color = "red";
      
    }

  }, 1000)
}
document.querySelector(".bot").addEventListener("click", function (dats) {
  var clicked = (Number(dats.target.textContent));
  if (clicked === hitval) {
    getscore();
    gethit();
    bubble();
  }

});
bubble();
gethit();
runtime();

