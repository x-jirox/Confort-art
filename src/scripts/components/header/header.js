// src/scripts/header.js

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

function toggleMenu(show) {
  const spans = menuButton?.querySelectorAll('span');
  
  if (show) {
    mobileMenu?.classList.remove('hidden');
    body.style.overflow = 'hidden';
    
    if (spans) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      spans.forEach(span => {
        span.classList.remove('bg-white');
        span.classList.add('bg-black');
      });
    }

    const menuItems = mobileMenu?.querySelectorAll('li');
    menuItems?.forEach((item, index) => {
      item.style.opacity = '0';
      item.classList.add('nav-item-animation');
      item.style.animationDelay = `${index * 0.1}s`;
      item.style.opacity = '1';
    });
  } else {
    mobileMenu?.classList.add('hidden');
    body.style.overflow = '';
    
    if (spans) {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  }
}

menuButton?.addEventListener('click', () => {
  const isMenuOpen = !mobileMenu?.classList.contains('hidden');
  toggleMenu(!isMenuOpen);
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    toggleMenu(false);
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const menuButton = document.getElementById('menuButton');
  const spans = menuButton?.querySelectorAll('span');

  if (window.scrollY > 100) {
    header?.classList.add('bg-white', 'shadow-lg');
    nav?.querySelectorAll('a').forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-800');
    });
    spans?.forEach(span => {
      span.classList.remove('bg-white');
      span.classList.add('bg-gray-800');
    });
  } else {
    header?.classList.remove('bg-white', 'shadow-lg');
    nav?.querySelectorAll('a').forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-800');
    });
    spans?.forEach(span => {
      span.classList.add('bg-white');
      span.classList.remove('bg-gray-800');
    });
  }
});
