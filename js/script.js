document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
  
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
  
document.getElementById('mobile-menu').addEventListener('click', function () {
      const menu = document.querySelector('header ul');
      menu.classList.toggle('active');
  });
