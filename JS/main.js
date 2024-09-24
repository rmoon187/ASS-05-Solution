
const stickySection = document.getElementById('stickySection');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    stickySection.classList.add('bg-white', 'bg-opacity-80', 'shadow-lg');
  } else {
    stickySection.classList.remove('bg-white', 'bg-opacity-80', 'shadow-lg');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const blog = document.getElementById('btn-blog');
  const home = document.getElementById('btn-home');
  
  if (blog) {
      blog.addEventListener('click', function() {
          window.location.href = 'blog.html';
      });
  }

  if (home) {
      home.addEventListener('click', function() {
          window.location.href = 'home.html';
      });
  }
});




