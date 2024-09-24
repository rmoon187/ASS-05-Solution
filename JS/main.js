
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
  donateButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    const input = document.getElementsByClassName('input')[i];
    let inputValue = parseFloat(input.value);
    const cardElement = document.getElementsByClassName('card-value')[i];
    let cardBalance = parseFloat(cardElement.innerText);

    const cardTitle = document.getElementsByTagName('span')[i].innerText;

    if(inputValue!==isNaN && inputValue<mainBalance && inputValue>0) {

      mainBalance -= inputValue;
      cardBalance += inputValue;
  
      mainBalanceElement.innerText = mainBalance;
      cardElement.innerText = cardBalance;
  
      // history
      const historySec = document.getElementById('history');
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();
  
      const div = document.createElement('div');
      div.classList.add('max-w-screen-xl', 'mx-auto','mt-5');
      div.innerHTML = `
        <div class="card bg-base-100 border border-[rgba(17,17,17,0.3)] px-3 py-5 mb-5">
          <div class="card-body">
            <h2 class="card-title">${inputValue} Taka is donated for ${cardTitle}</h2>
            <p>${formattedDate}</p>   
          </div>
        </div>    
      `
      historySec.appendChild(div);
      input.value = "";  
    }
    else {
      alert('Invalid Output');
    }
    
  });
}

