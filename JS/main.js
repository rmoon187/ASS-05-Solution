
const stickySection = document.getElementById('stickySection');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    stickySection.classList.add('bg-white', 'bg-opacity-80', 'shadow-lg');
  } else {
    stickySection.classList.remove('bg-white', 'bg-opacity-80', 'shadow-lg');
  }
});

document.getElementById('btn-blog').addEventListener('click', function () {

  window.location.href = "blog.html";
});

document.getElementById('btn-home').addEventListener('click', function () {

  window.location.href = "home.html";
});




document.getElementById('btn-history').addEventListener('click', function () {

  const hisSec = document.getElementById('history');
  hisSec.classList.remove('hidden')

  const donateSec = document.getElementById('donate');
  donateSec.classList.add('hidden')
});
