console.log("Owner Golam Mahadi Pilot");

// clock

// date

setInterval(() => {
  const today = new Date();
  let h = (today.getHours() + 24) % 12;
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampm;
  
    if (today.getHours() >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);

  document.getElementById("dclock").innerHTML = h + ":" + m + ":" + s + " "+ampm;
}, 1000);

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
//

setInterval(() => {
  document.getElementById("dclock").style.backgroundColor = "blue";
  document.getElementById("dclock").style.color = "white";
}, 3000);

setInterval(() => {
  document.getElementById("dclock").style.backgroundColor = "black";
  document.getElementById("dclock").style.color = "white";
}, 6000);

// dark mode.

function darkMode(e) {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  document.querySelectorAll(".title-text2").style.backgroundColor = "black";
  document.querySelectorAll(".title-text2").style.color = "white";
}
