let sec = document.getElementById("3");
let min = document.getElementById("2");
let hour = document.getElementById("1");
let btn = document.querySelector("button");
let mid = document.querySelector(".middle-div");
let x;
function validate() {
  if (sec.value == "") {
    sec.value = 0;
  }
  if (min.value == "") {
    min.value = 0;
  }
  if (hour.value == "") {
    hour.value = 0;
  }
  if (sec.value < 0 || min.value < 0 || hour.value < 0) {
    mid.innerHTML("Wrong time");
    return false;
  }
  if (sec.value == 0 && min.value == 0 && hour.value == 0) {
    mid.innerHTML("Wrong time");
    return false;
  }

  if (sec.value >= 60) {
    min.value = parseInt(sec.value / 60);
    sec.value %= 60;
  }
  if (min.value >= 60) {
    hour.value = parseInt(hour.value) + parseInt(min.value / 60);
    min.value %= 60;
  }

  return true;
}
function countDown() {
  sec.value -= 1;
  if (sec.value == 0 && min.value == 0 && hour.value == 0) {
    clearInterval(x);
    sec.disabled = false;
    min.disabled = false;
    hour.disabled = false;
  }

  // if(sec.value>0)
  //   sec.value-=1;
  // else if(min.value>0)
  // {
  //   sec.value=59;
  //   min.value-=1;
  // }
  // else if (hour.value>0)
  // {
  //  min.value=59;
  //  ho
  // }

  if (sec.value == 0 && min.value > 0) {
    sec.value = 59;
    min.value -= 1;
  }
  if (min.value == 0 && sec.value == 0 && hour.value > 0) {
    min.value = 59;
    sec.value = 59;
    hour.value -= 1;
  }
}

function start() {
  if (validate()) {
    x = setInterval(countDown, 1000);
    sec.disabled = true;
    min.disabled = true;
    hour.disabled = true;
  }
}
btn.onclick = function () {
  start();
};
