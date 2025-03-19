const navbarMenu = document.querySelector('.menu');
document.querySelector('#hamburger-menu').onclick = () => {
  navbarMenu.classList.toggle('active');
};

const closeMenu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
  if(!closeMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove('active');
  }
});