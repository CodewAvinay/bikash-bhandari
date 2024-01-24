var typed = new Typed('#element', {
    strings: ['I am a Passionate Neuro Surgeon.'],
    typeSpeed: 50,
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log("entry");
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }

    });
  });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));



  function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);

    // Check if the section is currently active
    var isActive = section.classList.contains('active');

    // Hide all sections
    var allSections = document.querySelectorAll('.content');
    allSections.forEach(function (sec) {
        sec.style.display = 'none';
        sec.classList.remove('active');
    });

    // If the section is not active, display it
    if (!isActive) {
        section.style.display = 'block';
        section.classList.add('active');
    }
}



document.addEventListener('DOMContentLoaded', function () {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjusted for your fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});






