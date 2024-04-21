document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Smooth scroll to section when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get target section id
        const targetSection = document.getElementById(targetId); // Get target section
        if (targetSection) {
          scrollToSection(targetSection);
        }
      });
    });
  
    // Function to scroll smoothly to a section
    function scrollToSection(section) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: section.offsetTop - 100 // Adjust offset as needed
      });
    }
  });
  