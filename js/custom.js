
    document.addEventListener('DOMContentLoaded', function () {
      let currentImageIndex = 0;
      const bannerImages = document.querySelectorAll('.banner-image');

      function showNextImage() {
          bannerImages[currentImageIndex].classList.remove('active');
          currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
          bannerImages[currentImageIndex].classList.add('active');
      }

      setInterval(showNextImage, 5000); // Change image every 5 seconds
  });

  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    function setActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
});


//  Get the ID (remove #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID (remove #)
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    });
});


