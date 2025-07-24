document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link, .logo');
  const contentSections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.dataset.target;
      const targetSection = document.getElementById(targetId);

      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });

      contentSections.forEach(section => {
        section.classList.remove('active');
      });

      if(this.classList.contains('nav-link')) {
        this.classList.add('active');
      } else {
        document.querySelector('.nav-link[data-target="home"]').classList.add('active');
      }
      
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
});
