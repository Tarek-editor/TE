document.addEventListener("DOMContentLoaded", function() {
  var backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('show');
      // إضافة الكلاس show لإظهار الزر
    } else {
      backToTopButton.classList.remove('show');
      // إزالة الكلاس show لإخفاء الزر
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 50, behavior: 'smooth' });
    // التمرير إلى الأعلى بشكل سلس عند النقر على الزر
  });
});


  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
