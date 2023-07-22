function fun(value){
  const button = document.querySelector(value);

  turnOffPreviousButton();
      if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

/* function fun2(){
  const button = document.querySelector('.js-button-2');
      if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
}
function fun3(){
  const button = document.querySelector('.js-button-3');
      if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
} */