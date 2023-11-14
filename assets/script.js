//display hidden menu when menubar is clicked
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("clickMenu");
    const openMenu = document.getElementById("hiddenMenu");
    menuIcon.addEventListener('click', () => {
        if (openMenu.style.display === 'none' || openMenu.style.display === '') {
          openMenu.style.display = 'block';
        } else {
          openMenu.style.display = 'none';
        }
    });   
  });
  
  //display main content when images clicked
  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const mainn = document.getElementById("mainn");
    const intro = document.getElementById("intro")
  
    sidebar.addEventListener('click', () => {
        if (mainn.style.display === 'none' || mainn.style.display === ''
         && intro.style.display === 'block' || intro.style.display === "flex") {
          mainn.style.display = 'block';
          intro.style.display = 'none'
        } else {
          mainn.style.display = 'none';
          intro.style.display = 'block'
        }
    });   
  });
  
  //slideshow
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
  
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    // Move to the next slide
    slideIndex++;
  
    // If we have reached the end, start over from the beginning
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
  
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
  
    // Change slide every 3 seconds (adjust as needed)
    setTimeout(showSlides, 3000);
  }
  
  //porfolio
  document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
  
    portfolioItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Add your custom logic for portfolio item click
            console.log(`Clicked on portfolio item: ${item.alt}`);
        });
    });
  });