const toggle = document.getElementById('toggleDark');
const toggle1 = document.getElementById('toggleDark1');
const body = document.querySelector('.bg-dark');
const body1 = document.querySelector('.bg-dark1');


toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon-stars-fill');
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = 'white';
    body.style.color = '#000';
    body.style.transition = '2s';
  }else{
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
  }
})

toggle1.addEventListener('click', function(){
  this.classList.toggle('bi-brightness-high-fill');
  if(this.classList.toggle('bi-moon-stars-fill')){
    body1.style.background = '#000';
    body1.style.color = '#fff';
    body1.style.transition = '2s';
  }else{
    body1.style.background = '#fff';
    body1.style.color = '#000';
    body1.style.transition = '2s';
  }
})


function colorFlipper(){
  const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  let randomNumberValue;
  let x = "#";

  for(let i=0; i < 6; i++){
    randomNumberValue = Math.floor(Math.random() * hex.length);
    x += hex[randomNumberValue];
  }
  
  document.getElementById("color").style.backgroundColor = x;
  document.querySelector('.color').innerHTML = x;
}

