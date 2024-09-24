
const stickySection = document.getElementById('stickySection');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    stickySection.classList.add('bg-white', 'bg-opacity-80', 'shadow-lg');
  } else {
    stickySection.classList.remove('bg-white', 'bg-opacity-80', 'shadow-lg');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const blog = document.getElementById('btn-blog');
  const home = document.getElementById('btn-home');

  if (blog) {
    blog.addEventListener('click', function () {
      window.location.href = 'blog.html';
    });
  }

  if (home) {
    home.addEventListener('click', function () {
      window.location.href = 'home.html';
    });
  }
});

// donation
const mainBalanceElement = document.getElementById('balance');
let mainBalance = parseFloat(mainBalanceElement.innerText); 
const donateButtons = document.getElementsByClassName('donate-now');

for (let i = 0; i < donateButtons.length; i++) {
  donateButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    const input = document.getElementsByClassName('input')[i];
    let inputValue = parseFloat(input.value);
    const cardElement = document.getElementsByClassName('card-value')[i];
    let cardBalance = parseFloat(cardElement.innerText);

    mainBalance-=inputValue;
    cardBalance+=inputValue;

    mainBalanceElement.innerText= mainBalance;
    cardElement.innerText = cardBalance; 
   
    input.value = "";
  });
}

