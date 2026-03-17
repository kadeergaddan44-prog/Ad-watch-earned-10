let totalAds = 5000;
let watched = 0;
let balance = 0;
let timer = 15;
let interval;

function startAd(){

  if(watched >= totalAds){
    alert("All ads finished!");
    return;
  }

  timer = 15;
  document.getElementById("timer").innerText = timer;
  document.getElementById("adText").innerText = "Ad is playing...";

  interval = setInterval(()=>{
    timer--;
    document.getElementById("timer").innerText = timer;

    if(timer <= 0){
      clearInterval(interval);

      watched++;
      balance += 2;

      document.getElementById("watched").innerText = watched;
      document.getElementById("balance").innerText = balance;

      document.getElementById("adText").innerText = "Ad finished. Click again.";
    }

  },1000);
}
