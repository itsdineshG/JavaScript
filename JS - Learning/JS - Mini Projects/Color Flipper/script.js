const toggle = document.getElementById('toggleDark');
const body = document.querySelector('.bg-dark');


toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon-fill');
  if(this.classList.toggle('bi-brightness-high-fill')){
    document.querySelector('.bg-dark').style.background = 'white';
    document.querySelector('.bg-dark').style.color = '#000';
    document.querySelector('.bg-dark').style.transition = '2s';
  }else{
    querySelector('.bg-dark').style.background = 'black';
    querySelector('.bg-dark').style.color = 'white';
    querySelector('.bg-dark').style.transition = '2s';
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

