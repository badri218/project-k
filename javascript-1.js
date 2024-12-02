 // Toggle navigation on mobile
 document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });