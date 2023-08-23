function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var sess = document.getElementById('session');
 
  if(hrs >= 12){
    sess.innerHTML = "PM";
  }else{
    sess.innerHTML = "AM";
  }

  if(hrs > 12){
    hrs -= 12;
  }

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec; 

}

setInterval(displayTime, 10);