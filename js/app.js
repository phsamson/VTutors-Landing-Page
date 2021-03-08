

//Changes the NAV Bar when user scroll.
window.addEventListener("scroll", function(){
     var navbar = document.querySelector("nav");
     navbar.classList.toggle("sticky", window.scrollY > 0);
 });
//NAV Animation
function navSlide() {
     const burger = document.querySelector(".burger");
     const nav = document.querySelector(".nav-links");
     const navLinks = document.querySelectorAll(".nav-links li");
     //Burger Icon Animation
     burger.addEventListener("click", function(){
         nav.classList.toggle("nav-active");
         navLinks.forEach((link, index) => {
             if (link.style.animation) {
                  link.style.animation = "";
             } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
               }
         });
         burger.classList.toggle("toggle");
     });
          //Closes the NAV on mobile when one of <li> is clicked.
          function linkAction() {
               nav.classList.remove("nav-active");
               burger.classList.toggle("toggle");
               navLinks.forEach((link) => {
                   if (link.style.animation) {
                       link.style.animation = "";
                   }
                    //Adds a magic line on a link when clicked on mobile view.
                   link.addEventListener("click", function(){
                    link.classList.add("active");
                    });
                link.classList.remove("active");
                });
          }
          navLinks.forEach(n => n.addEventListener("click", linkAction));
}
navSlide();